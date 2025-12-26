// Обработка формы обратной связи
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Проверка заполнения полей
            if (name && email && message) {
                alert('Спасибо за ваше сообщение, ' + name + '!\n\nМы свяжемся с вами по адресу: ' + email);

                // Очистка формы после отправки
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все обязательные поля!');
            }
        });
    }
});