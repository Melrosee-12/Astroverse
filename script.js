const modal = document.getElementById("bookingModal");
    const btn = document.getElementById("bookingBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("bookingForm");
    const btn2 = document.getElementById("bookingBtn-2")

      // Открытие модального окна
      btn.onclick = function() {
        modal.style.display = "block";
      }

      btn2.onclick = function() {
        modal.style.display = "block";
      }

      // Закрытие модального окна
      span.onclick = function() {
        modal.style.display = "none";
      }

      // Закрытие при клике вне окна
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      // Обработка формы
      form.onsubmit = function(e) {
        e.preventDefault();
        const arena = document.getElementById('arena').value;
        alert(`Бронирование на арене "${arena}" отправлено! Мы свяжемся с вами для подтверждения.`);
        modal.style.display = "none";
        form.reset();
      }