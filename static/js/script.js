document.addEventListener('DOMContentLoaded', function() {
    const randomImagesContainer = document.querySelector('.random-images-container');
    const containerWidth = randomImagesContainer.offsetWidth;
    const containerHeight = randomImagesContainer.offsetHeight;

    function createRandomImages() {
        for (let i = 0; i < 5; i++) {
            const img = document.createElement('img');
            img.src = 'static/images/qwerty.jpg'; // Замените на путь к вашим изображениям
            img.alt = `Random Image ${i + 1}`;
            img.classList.add('random-image'); // Добавляем класс для стилей

            // Генерируем случайные координаты внутри контейнера
            const randomTop = Math.random() * (containerHeight - 100) + 50; // Положение по высоте
            const randomLeft = Math.random() * (containerWidth - 100) + 50; // Положение по ширине
            const randomRotation = Math.random() * 180 - 90; // Поворот от -90 до 90 градусов

            img.style.position = 'absolute';
            img.style.top = `${randomTop}px`;
            img.style.left = `${randomLeft}px`;
            img.style.transform = `rotate(${randomRotation}deg)`;
            img.style.width = '50px'; // Маленький размер изображения

            randomImagesContainer.appendChild(img);
        }
    }

    createRandomImages();
});
