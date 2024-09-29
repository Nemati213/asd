// Функция для расчета оставшегося времени
function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isBirthday: true
        };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        isBirthday: false
    };
}

// Функция для обновления таймера
function updateTimer() {
    const today = new Date();
    let targetYear = today.getFullYear();

    // Определение цели (17 октября каждого года)
    const targetDate = new Date(`October 17, ${targetYear} 00:00:00`).getTime();

    // Если текущая дата уже позже 17 октября, добавляем год для следующего события
    if (today.getTime() > targetDate) {
        targetYear++;
    }

    const newTargetDate = new Date(`October 17, ${targetYear} 00:00:00`).getTime();
    const timeRemaining = calculateTimeRemaining(newTargetDate);

    // Если сейчас день рождения, показываем поздравление и пожелание
    if (timeRemaining.isBirthday) {
        document.getElementById("timer-title").textContent = "🎉 С днём рождения! 🎉";
        document.getElementById("birthday-message").style.display = "block"; // Показываем сообщение
        document.getElementById("birthday-message").classList.add("fade-in"); // Добавляем анимацию

        document.getElementById("days").textContent = "🎉";
        document.getElementById("hours").textContent = "🎉";
        document.getElementById("minutes").textContent = "🎉";
        document.getElementById("seconds").textContent = "🎉";
    } else {
        // Обновление текста для таймера
        const age = targetYear - 2007; // Предположим, что родилась в 2007 году
        document.getElementById("timer-title").textContent = `До ${age}-летия:`;
        document.getElementById("birthday-message").style.display = "none"; // Скрываем сообщение
        document.getElementById("days").textContent = timeRemaining.days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = timeRemaining.hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = timeRemaining.minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = timeRemaining.seconds.toString().padStart(2, "0");
    }

    // Скрываем таймер, если день рождения уже прошёл
    if (today.getTime() > new Date(`October 18, ${targetYear} 00:00:00`).getTime()) {
        const nextTargetDate = new Date(`October 17, ${targetYear + 1} 00:00:00`).getTime();
        const nextAge = (targetYear + 1) - 2007; // Следующий возраст
        const nextTimeRemaining = calculateTimeRemaining(nextTargetDate);

        document.getElementById("timer-title").textContent = `До ${nextAge}-летия:`;
        document.getElementById("days").textContent = nextTimeRemaining.days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = nextTimeRemaining.hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = nextTimeRemaining.minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = nextTimeRemaining.seconds.toString().padStart(2, "0");
    }
}

// Запуск таймера с обновлением каждую секунду
setInterval(updateTimer, 1000);
updateTimer(); // Старт таймера сразу после загрузки
