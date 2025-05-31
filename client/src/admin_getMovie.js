const apiUrl = "http://localhost:5000/api/movies";

async function fetchMovies() {
  try {
    const response = await fetch(apiUrl);
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

fetchMovies();
