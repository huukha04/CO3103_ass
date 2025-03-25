# Project Setup

## A. Cấu hình

### 1. Client
- **Framework:** Next.js + React.js
- **Cài đặt:** [Next.js Installation Guide](https://nextjs.org/docs/pages/getting-started/installation)
- **UI Library:** [Ant Design](https://ant.design/components/overview/)
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

### 2. Server
- **Backend:** Express.js (Dùng module)

### 3. Extension
- **Draw.io Integration** (Hỗ trợ vẽ sơ đồ trực tiếp trong VSCode)

---

## B. Cách chạy

### 1. Chạy đồng thời client & server
```bash
npm run dev
```

### 2. Chạy riêng lẻ
#### Chạy server:
```bash
cd server
npm run dev
```

#### Chạy client:
```bash
cd client
npm run dev
```

---

## C. Thư mục dự án
```
project-root/
├── client/         # Frontend (Next.js + React.js)
│   ├── src/        # Source code chính
│   │   ├── app/    # Cấu trúc theo App Router
│   │   │   ├── layout.tsx  # Layout chung
│   │   │   ├── page.tsx    # Trang chính
│   │   ├── components/ # Các component dùng chung
│   │   ├── pages/      # Legacy Pages Router 
│   │   ├── styles/     # CSS, Tailwind config
│   ├── public/     # Ảnh, favicon, assets
│   ├── next.config.ts # Cấu hình Next.js
│   ├── package.json
│   ├── tsconfig.json # Cấu hình TypeScript
│   ├── eslint.config.mjs # Cấu hình ESLint
│   ├── postcss.config.mjs # Cấu hình PostCSS
│   ├── README.md
│
├── server/         # Backend (Express.js)
│   ├── src/        # Source code chính
│   │   ├── config/       # Cấu hình hệ thống (database, env)
│   │   ├── controllers/  # Xử lý logic API
│   │   ├── middlewares/  # Middleware cho request
│   │   ├── models/       # Định nghĩa database models (MongoDB, Mongoose)
│   │   ├── routes/       # Định nghĩa API routes
│   │   ├── utils/        # Các hàm hỗ trợ
│   │   ├── app.js        # Khởi tạo ứng dụng Express
│   │   ├── server.js     # Chạy server
│   ├── package.json
│
├── README.md       # Hướng dẫn dự án
├── package.json    # Cấu hình npm chung
├── package-lock.json # Khóa phiên bản dependencies
```

---

## D. Môi trường
- **Node.js:** Phiên bản mới nhất
- **MongoDB:** Cơ sở dữ liệu sử dụng MongoDB
- **.env file:**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-secret-key
```

---

## E. Liên hệ
Nếu có bất kỳ vấn đề nào, vui lòng liên hệ qua email hoặc tạo issue trên GitHub!

# CO3103_ass
