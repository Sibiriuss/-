// Модальное окно для входа
const modal = document.getElementById('loginModal');
const btn = document.getElementById('loginBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка формы регистрации
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Вход выполнен! (Это демо - в реальном банке здесь была бы авторизация)');
    modal.style.display = "none";
    this.reset();
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});