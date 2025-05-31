document.addEventListener("DOMContentLoaded", function () {
  const datesContainer = document.querySelector(".dates");
  const timeContainer = document.querySelector(".Time");

  const displayDate = document.querySelector(".mx-auto p.text-gray-600"); // Hiện ngày
  const displayTime = document.querySelector(
    ".mx-auto p.text-gray-800.text-4xl",
  ); // Hiện giờ
  const displayLabel = document.querySelector(".mx-auto span.bg-yellow-400"); // Hiện loại vé

  // Xử lý chọn ngày
  datesContainer.addEventListener("click", function (e) {
    const clickedGroup = e.target.closest(".date-group");
    if (!clickedGroup) return;

    // Hiệu ứng button
    clickedGroup.style.transform = "scale(0.95)";
    setTimeout(() => {
      clickedGroup.style.transform = "scale(1)";
    }, 150);

    // Lấy button đang được chọn trước đó
    const previouslySelected = document.querySelector(".date-group.selected");

    // Nếu click vào button đã chọn thì không làm gì
    if (previouslySelected === clickedGroup) return;

    //Hiệu ứng cho button
    document.querySelectorAll(".date-group").forEach((group) => {
      group.style.transition = "all 0.3s ease";
    });

    if (previouslySelected) {
      previouslySelected.classList.remove("selected", "bg-darkblue");
      previouslySelected.classList.add("bg-transparent");

      const oldSpans = previouslySelected.querySelectorAll("span");
      oldSpans.forEach((span) => {
        span.style.transition = "color 0.3s ease";
        span.classList.remove("text-white");
        span.classList.add("text-gray", "text-darkgray");
      });
    }

    // Thêm selection mới
    clickedGroup.classList.add("selected", "bg-darkblue");
    clickedGroup.classList.remove("bg-transparent");

    const newSpans = clickedGroup.querySelectorAll("span");
    newSpans.forEach((span) => {
      span.style.transition = "color 0.3s ease";
      span.classList.remove("text-gray", "text-darkgray");
      span.classList.add("text-white");
    });

    // 
    clickedGroup.style.animation = "pulse 0.5s ease";
    setTimeout(() => {
      clickedGroup.style.animation = "";
    }, 500);

    // Cập nhật hiện ngày
    const dateSpan = clickedGroup
      .querySelector("span:first-child")
      .textContent.trim();
    const year = new Date().getFullYear();
    displayDate.textContent = `${dateSpan} ${year}`;
  });

  // Xử lý chọn giờ
  timeContainer.addEventListener("click", function (e) {
    const clickedTime = e.target.closest(".time");
    if (!clickedTime) return;

    // Hiệu ứng nhấn button
    clickedTime.style.transform = "scale(0.95)";
    setTimeout(() => {
      clickedTime.style.transform = "scale(1)";
    }, 150);

    // Lấy thời gian đang được chọn trước đó
    const previouslySelected = document.querySelector(".time.selected");

    // Nếu click vào thời gian đã chọn thì không làm gì
    if (previouslySelected === clickedTime) return;

    // Hiệu ứng cho button thời gian
    document.querySelectorAll(".time").forEach((time) => {
      time.style.transition = "all 0.3s ease";
      time.style.cursor = "pointer";
    });

    // Xóa selection cũ
    if (previouslySelected) {
      previouslySelected.classList.remove(
        "selected",
        "bg-darkblue",
        "text-white",
      );
      previouslySelected.classList.add("border-darkblue", "text-darkblue");
    }

    // Thêm selection mới
    clickedTime.classList.add("selected", "bg-darkblue", "text-white");
    clickedTime.classList.remove("border-darkblue", "text-darkblue");

    // 
    clickedTime.style.animation = "pulse 0.5s ease";
    setTimeout(() => {
      clickedTime.style.animation = "";
    }, 500);

    // Cập nhật hiện giờ
    displayTime.textContent = clickedTime.textContent.trim();

    // Cập nhật loại vé (Regular hoặc Premium)
    const parentSection = clickedTime.closest(".regular, .premium");
    if (parentSection) {
      if (parentSection.classList.contains("regular")) {
        displayLabel.textContent = "REGULAR";
        displayLabel.classList.remove("bg-yellow-400", "text-black");
        displayLabel.classList.add("bg-blue-500", "text-white");
      } else if (parentSection.classList.contains("premium")) {
        displayLabel.textContent = "PREMIUM";
        displayLabel.classList.remove("bg-blue-500", "text-white");
        displayLabel.classList.add("bg-yellow-400", "text-black");
      }
    }
  });
});
