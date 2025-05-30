document.addEventListener('DOMContentLoaded', function() {
  // Phần chọn ngày (giữ nguyên như trước)
  const datesContainer = document.querySelector('.dates');
  
  datesContainer.addEventListener('click', function(e) {
    const clickedGroup = e.target.closest('.date-group');
    if (!clickedGroup) return;
    
    // Hiệu ứng nhấn button
    clickedGroup.style.transform = 'scale(0.95)';
    setTimeout(() => {
      clickedGroup.style.transform = 'scale(1)';
    }, 150);
    
    // Lấy button đang được chọn trước đó
    const previouslySelected = document.querySelector('.date-group.selected');
    
    // Nếu click vào button đã chọn thì không làm gì
    if (previouslySelected === clickedGroup) return;
    
    // Hiệu ứng transition cho tất cả các button
    document.querySelectorAll('.date-group').forEach(group => {
      group.style.transition = 'all 0.3s ease';
    });
    
    // Xóa selection cũ với hiệu ứng fade out
    if (previouslySelected) {
      previouslySelected.classList.remove('selected', 'bg-darkblue');
      previouslySelected.classList.add('bg-transparent');
      
      const oldSpans = previouslySelected.querySelectorAll('span');
      oldSpans.forEach(span => {
        span.style.transition = 'color 0.3s ease';
        span.classList.remove('text-white');
        span.classList.add('text-gray', 'text-darkgray');
      });
    }
    
    // Thêm selection mới với hiệu ứng fade in
    clickedGroup.classList.add('selected', 'bg-darkblue');
    clickedGroup.classList.remove('bg-transparent');
    
    const newSpans = clickedGroup.querySelectorAll('span');
    newSpans.forEach(span => {
      span.style.transition = 'color 0.3s ease';
      span.classList.remove('text-gray', 'text-darkgray');
      span.classList.add('text-white');
    });
    
    // Thêm hiệu ứng "pulse" cho button mới được chọn
    clickedGroup.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
      clickedGroup.style.animation = '';
    }, 500);
  });

  // Phần mới: Xử lý chọn thời gian
  const timeContainer = document.querySelector('.Time');
  
  timeContainer.addEventListener('click', function(e) {
    const clickedTime = e.target.closest('.time');
    if (!clickedTime) return;
    
    // Hiệu ứng nhấn button
    clickedTime.style.transform = 'scale(0.95)';
    setTimeout(() => {
      clickedTime.style.transform = 'scale(1)';
    }, 150);
    
    // Lấy thời gian đang được chọn trước đó
    const previouslySelected = document.querySelector('.time.selected');
    
    // Nếu click vào thời gian đã chọn thì không làm gì
    if (previouslySelected === clickedTime) return;
    
    // Hiệu ứng transition cho tất cả các ô thời gian
    document.querySelectorAll('.time').forEach(time => {
      time.style.transition = 'all 0.3s ease';
      time.style.cursor = 'pointer';
    });
    
    // Xóa selection cũ với hiệu ứng fade out
    if (previouslySelected) {
      previouslySelected.classList.remove('selected', 'bg-darkblue', 'text-white');
      previouslySelected.classList.add('border-darkblue', 'text-darkblue');
    }
    
    // Thêm selection mới với hiệu ứng fade in
    clickedTime.classList.add('selected', 'bg-darkblue', 'text-white');
    clickedTime.classList.remove('border-darkblue', 'text-darkblue');
    
    // Thêm hiệu ứng "pulse" cho thời gian mới được chọn
    clickedTime.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
      clickedTime.style.animation = '';
    }, 500);
  });
});