
async function fetchCinemas() {
  try {
    const res = await fetch(`${apiBase}/cinemas`, {
      headers: { Authorization: token },
    });
    const cinemas = await res.json();

    const tbody = document.getElementById("cinemasTableBody");
    tbody.innerHTML = "";

    cinemas.forEach((cinema, index) => {
      const tr = document.createElement("tr");
      tr.classList.add("border-b", "border-gray-400");
      tr.innerHTML = `
        <td class="border border-gray-400 px-3 py-1 text-center">${index + 1}</td>
        <td class="border border-gray-400 px-3 py-1">${cinema.name || ""}</td>
        <td class="border border-gray-400 px-3 py-1">${cinema.address || ""}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách rạp:", error);
  }
}

// Xử lý submit form tạo rạp mới
document.getElementById("cinemaForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("cinemaName").value.trim();
  const address = document.getElementById("cinemaAddress").value.trim();

  if (!name || !address) {
    alert("Vui lòng nhập đầy đủ tên và địa chỉ rạp");
    return;
  }

  try {
    const res = await fetch(`${apiBase}/cinemas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ name, address }),
    });

    if (res.ok) {
      alert("Thêm rạp thành công!");
      e.target.reset();
      fetchCinemas(); // Tải lại danh sách rạp
    } else {
      const err = await res.json();
      alert("Lỗi khi thêm rạp: " + (err.message || res.statusText));
    }
  } catch (error) {
    alert("Lỗi mạng hoặc server!");
    console.error(error);
  }
});

// Gọi khi trang load
fetchCinemas();
