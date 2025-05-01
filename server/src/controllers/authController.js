import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        // Kiểm tra email tồn tại
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã được sử dụng" });
        }
        
        const existingUsername = await User.findOne({ username: req.body.username });
        if (existingUsername) {
            return res.status(400).json({ message: "Tên đăng nhập đã được sử dụng" });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Tạo user mới
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role || "customer",
        });

        // Lưu user vào database
        await user.save();

        // Tạo token
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // Gửi phản hồi về client
        res.status(201).json({
            message: "Đăng ký thành công",
            user: { id: user._id, username: user.username, email: user.email, role: user.role },
            token
        });

    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        res.status(500).json({ message: "Lỗi server khi đăng ký" });
    }
};


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Kiểm tra username có tồn tại không
        const user = await User.findOne({ username }); // Đổi từ email -> username
        if (!user) {
            return res.status(400).json({ message: "username hoặc mật khẩu không đúng" });
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "username hoặc mật khẩu không đúng" });
        }

        // Tạo token
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({
            message: "Đăng nhập thành công",
            user: { id: user._id, username: user.username, email: user.email, role: user.role },
            token
        });
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        res.status(500).json({ message: "Lỗi server khi đăng nhập" });
    }
};


export const checkSession = async (req, res) => {
    try {
      if (req.session && req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
      } else {
        res.json({ loggedIn: false });
      }
    } catch (error) {
      console.error('Error in checkSession:', error);
      res.status(500).json({ loggedIn: false, error: 'Internal server error' });
    }
  };