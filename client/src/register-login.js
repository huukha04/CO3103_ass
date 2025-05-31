      function togglePassword(button) {
        const input = button.parentElement.querySelector('input');
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        
        const eyeOpen = button.querySelector('.eye-open');
        const eyeClosed = button.querySelector('.eye-closed');
        eyeOpen.classList.toggle('hidden');
        eyeClosed.classList.toggle('hidden');
      }

      function checkPasswordMatch() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorElement = document.getElementById('passwordMatchError');
        const confirmInput = document.getElementById('confirmPassword');

        if (password !== confirmPassword && confirmPassword.length > 0) {
          errorElement.classList.remove('hidden');
          confirmInput.classList.remove('outline-neutral-200');
          confirmInput.classList.add('outline-red-500', 'outline-2');
        } else {
          errorElement.classList.add('hidden');
          confirmInput.classList.remove('outline-red-500', 'outline-2');
          confirmInput.classList.add('outline-neutral-200');
        }
      }

      function validateForm() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return false;
        }
        return true;
      }