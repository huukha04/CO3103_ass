# Sử dụng Node.js phiên bản 18
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json trước để tối ưu cache
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng cho server
EXPOSE 5000

# Chạy server
CMD ["npm", "run", "dev"]
