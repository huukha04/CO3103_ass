import { body, validationResult } from "express-validator";

export const registerValidator = [
    body("username")
        .trim()
        .notEmpty().withMessage("Username là bắt buộc")
        .isLength({ min: 3 }).withMessage("Username phải có ít nhất 3 ký tự"),
    
    body("email")
        .trim()
        .notEmpty().withMessage("Email là bắt buộc")
        .isEmail().withMessage("Email không hợp lệ")
        .normalizeEmail(),
    
    body("password")
        .notEmpty().withMessage("Mật khẩu là bắt buộc")
        .isLength({ min: 6 }).withMessage("Mật khẩu phải có ít nhất 6 ký tự"),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


export const loginValidator = [
    body("username")
        .trim()
        .notEmpty().withMessage("Username là bắt buộc")
        .isLength({ min: 3 }).withMessage("Username phải có ít nhất 3 ký tự"),
    
    body("password")
        .notEmpty().withMessage("Mật khẩu là bắt buộc")
        .isLength({ min: 6 }).withMessage("Mật khẩu phải có ít nhất 6 ký tự"),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];