const apiMovieUrl = "http://localhost:5000/api/movies";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODM5YTdlNDE0YzFmMTVlNjg4YjIxOTciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDg2MTA3MTQsImV4cCI6MTc0OTIxNTUxNH0.wGVrOaTtwSdfsLUxxk0IYmsXfqDa0jLmLjIcxzVIQJo"; // Token admin

async function fetchMovies() {
  try {
    const response = await fetch(apiMovieUrl, {
      headers: { Authorization: token },
    });
    const movies = await response.json();

    const tbody = document.getElementById("movieTableBody");
    tbody.innerHTML = "";

    movies.forEach((movie, index) => {
      const releaseDate = new Date(movie.releaseDate).toLocaleDateString();
      const posterUrl = movie.posterUrl
        ? `http://localhost:5000${movie.posterUrl}`
        : "";

      const tr = document.createElement("tr");
      tr.classList.add("border-b", "border-gray-400");

      tr.innerHTML = `
        <td class="border border-gray-400 px-3 py-1 text-center">${index + 1}</td>
        <td class="border border-gray-400 px-3 py-1 text-center">
          ${posterUrl ? `<img src="${posterUrl}" alt="Poster" class="w-20 h-auto mx-auto rounded" />` : "Chưa có"}
        </td>
        <td class="border border-gray-400 px-3 py-1">${movie.title || ""}</td>
        <td class="border border-gray-400 px-3 py-1">${movie.genre || ""}</td>
        <td class="border border-gray-400 px-3 py-1">${releaseDate}</td>
        <td class="border border-gray-400 px-3 py-1">${movie.director || ""}</td>
        <td class="border border-gray-400 px-3 py-1 text-center">${movie.ageLimit || ""}</td>
        <td class="border border-gray-400 px-3 py-1 text-center">${movie.duration || ""}</td>
        <td class="border border-gray-400 px-3 py-1 text-center">${movie.rating || ""}</td>
      `;

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
  }
}

// Xử lý preview poster ảnh khi chọn file
document.getElementById("poster").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("posterPreview").src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// Xử lý submit form thêm phim
document.getElementById("movieForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", document.getElementById("title").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("duration", document.getElementById("duration").value);
  formData.append("price", document.getElementById("price").value);
  formData.append(
    "showingSchedule",
    document.getElementById("showingSchedule").value,
  );
  formData.append("endDate", document.getElementById("endDate").value);

  const posterFile = document.getElementById("poster").files[0];
  if (posterFile) {
    formData.append("poster", posterFile);
  }

  try {
    const response = await fetch(apiMovieUrl, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    if (response.ok) {
      alert("Thêm phim thành công!");
      e.target.reset();
      document.getElementById("posterPreview").src = "";
      fetchMovies(); // Tải lại danh sách phim
    } else {
      const errorData = await response.json();
      alert("Lỗi khi thêm phim: " + (errorData.message || response.statusText));
    }
  } catch (error) {
    alert("Lỗi mạng hoặc server!");
    console.error(error);
  }
});

// Load danh sách phim khi trang được tải
fetchMovies();
