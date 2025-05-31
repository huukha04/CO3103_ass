document.getElementById("movieForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", document.getElementById("title").value.trim());
  formData.append("genre", document.getElementById("genre").value.trim());
  formData.append("director", document.getElementById("director").value.trim());
  formData.append("releaseDate", document.getElementById("releaseDate").value);
  formData.append("rating", Number(document.getElementById("rating").value));
  formData.append(
    "ageLimit",
    Number(document.getElementById("ageLimit").value),
  );
  formData.append(
    "duration",
    Number(document.getElementById("duration").value),
  );
  formData.append(
    "description",
    document.getElementById("description").value.trim(),
  );

  const posterFile = document.getElementById("poster").files[0];
  if (posterFile) {
    formData.append("poster", posterFile);
  }

  try {
    const response = await fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODM5YTdlNDE0YzFmMTVlNjg4YjIxOTciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDg2MTA3MTQsImV4cCI6MTc0OTIxNTUxNH0.wGVrOaTtwSdfsLUxxk0IYmsXfqDa0jLmLjIcxzVIQJo", // Token admin
      },
      body: formData,
    });

    if (response.ok) {
      alert("Thêm phim thành công!");
      e.target.reset();
      document.getElementById("posterPreview").src = "";
      fetchMovies(); // Gọi lại hàm lấy danh sách phim
    } else {
      const errorData = await response.json();
      alert("Lỗi khi thêm phim: " + (errorData.message || response.statusText));
    }
  } catch (error) {
    alert("Lỗi mạng hoặc server!");
    console.error(error);
  }
});
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
  