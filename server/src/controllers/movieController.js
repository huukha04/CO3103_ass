import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Lấy __dirname trong ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getShowing = async (req, res) => {
    try {
        // Đường dẫn tới thư mục chứa ảnh trên hệ thống file
        const imagesDir = join(__dirname, '../../uploads/movies/coming'); // chỉnh tùy theo cấu trúc thư mục thật

        // Đọc các tệp trong thư mục
        fs.readdir(imagesDir, (err, files) => {
            if (err) {
                console.error('Lỗi khi đọc thư mục:', err);
                return res.status(500).json({ message: 'Lỗi server khi lấy danh sách ảnh' });
            }

            // Lọc và tạo đường dẫn public cho các ảnh
            const imageUrls = files
                .filter(file => /\.(jpg|jpeg|png)$/i.test(file)) // lọc đúng đuôi ảnh
                .map(file => `http://localhost:5000/uploads/movies/coming/${file}`);

            res.json({ imageUrls });
        });
    } catch (error) {
        console.error('Lỗi server:', error);
        res.status(500).json({ message: 'Lỗi server khi lấy danh sách ảnh' });
    }
};
