# Sử dụng Node.js phiên bản 18
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ source code vào container
COPY . .

# Biến môi trường Next.js (nếu cần)
ENV NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Mở cổng cho frontend
EXPOSE 3000

# Chạy Next.js ở chế độ development
CMD ["npm", "run", "dev"]
