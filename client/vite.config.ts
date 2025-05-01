import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Alias @ trỏ đến thư mục src
    },
  },
  plugins: [
    tailwindcss(),  // Cấu hình Tailwind CSS
  ],
});
