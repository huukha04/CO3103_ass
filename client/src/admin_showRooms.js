//Token là biến token

const apiBase = "http://localhost:5000/api";

async function fetchRooms() {
  try {
    const res = await fetch(`${apiBase}/rooms`, {
      headers: { Authorization: token },
    });
    const rooms = await res.json();

    const tbody = document.getElementById("roomsTableBody");
    tbody.innerHTML = "";

    rooms.forEach((room, index) => {
      // Giả sử room có trường 'name', 'cinema' (tên rạp hoặc object), 'seats' (array)
      // Nếu cinema là object, lấy tên, nếu là ID thì hiển thị ID
      const cinemaName = room.cinema?.name || room.cinema || "Chưa có";
      const seatCount = Array.isArray(room.seats) ? room.seats.length : 0;

      const tr = document.createElement("tr");
      tr.classList.add("border-b", "border-gray-400");
      tr.innerHTML = `
        <td class="border border-gray-400 px-3 py-1 text-center">${index + 1}</td>
        <td class="border border-gray-400 px-3 py-1">${room.name || ""}</td>
        <td class="border border-gray-400 px-3 py-1">${cinemaName}</td>
        <td class="border border-gray-400 px-3 py-1 text-center">${seatCount}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phòng:", error);
  }
}

// Gọi hàm khi trang load
fetchRooms();
