
async function loadMovies() {
  try {
    const res = await fetch(`${apiBase}/movies`, {
      headers: { Authorization: token },
    });
    const movies = await res.json();

    const movieSelect = document.getElementById("movieSelect");
    movieSelect.innerHTML = `<option value="">-- Choose Movie --</option>`;
    movies.forEach((m) => {
      const opt = document.createElement("option");
      opt.value = m._id;
      opt.textContent = m.title;
      movieSelect.appendChild(opt);
    });
  } catch (error) {
    console.error("Lỗi load movies:", error);
  }
}

// Gọi API lấy lịch chiếu của phim theo movieId
async function fetchShowtimes(movieId) {
  try {
    const res = await fetch(`${apiBase}/show-times/movie/${movieId}`, {
      headers: { Authorization: token },
    });
    const showtimes = await res.json();

    const tbody = document.getElementById("showtimesTableBody");
    tbody.innerHTML = ""; // Clear current showtimes

    showtimes.forEach((showtime, index) => {
      const startTime = new Date(showtime.startTime).toLocaleString();
      const seats = showtime.seats
        ? showtime.seats.map((seat) => seat.code).join(", ")
        : "Chưa có";

      const tr = document.createElement("tr");
      tr.classList.add("border-b", "border-gray-400");
      tr.innerHTML = `
        <td class="border border-gray-400 px-3 py-1 text-center">${index + 1}</td>
        <td class="border border-gray-400 px-3 py-1">${showtime.cinema || ""}</td>
        <td class="border border-gray-400 px-3 py-1">${showtime.room || ""}</td>
        <td class="border border-gray-400 px-3 py-1">${startTime}</td>
        <td class="border border-gray-400 px-3 py-1">${showtime.price || ""} VND</td>
        <td class="border border-gray-400 px-3 py-1">${seats}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Lỗi khi lấy lịch chiếu:", error);
  }
}

// Khi admin chọn phim và nhấn nút "Xem Lịch Chiếu"
document.getElementById("btnFetchShowtimes").addEventListener("click", () => {
  const movieId = document.getElementById("movieSelect").value;
  if (movieId) {
    fetchShowtimes(movieId);
  } else {
    alert("Vui lòng chọn phim");
  }
});

// Tải danh sách phim vào dropdown khi trang được tải
loadMovies();
