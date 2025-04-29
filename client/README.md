
Thay vì viết code dài như vầy
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <div>
        <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello Vite!</h1>
        <div class="card">
        <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        Click on the Vite logo to learn more
        </p>
    </div>
  </body>
</html>

```

ta có thể tách ra các component để tái sử dụng <script type="module" src="
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/components/main.js"></script>
  </body>
</html>

```
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

```
```
Cấu trúc thư mục
```
project-root/0
├── public/                 # Các file tĩnh (serve nguyên bản)
├── src/                    # Mã nguồn chính của ứng dụng
│   ├── assets/             # Hình ảnh, font, v.v. được import trong JS/CSS
│   ├── components/         # Các component (nút, layout, card,...) tái sử dụng
│   ├── pages/              # Các trang chính 
│   ├── style/              # Các file CSS/SCSS
│   │   └── test.css
│   ├── utils/              # Các hàm tiện ích
│   │   └── counter.js
│   └── main.js             # File JS chính khởi chạy app
├── index.html              # Điểm bắt đầu ứng dụng trang chủ
├── package.json
└── vite.config.js          # Cấu hình Vite

```
