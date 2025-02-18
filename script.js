document.addEventListener('DOMContentLoaded', function () {
    function updateCountdown() {
        const countdown = document.getElementById('countdown');
        const launchDate = new Date('Feb 18, 2025 23:59:59').getTime();
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Если обратный отсчет завершен, заменить текст
        if (distance < 0) {
            clearInterval(interval);
            countdown.innerHTML = "Акция закончилась!";
        }
    }

    // Обновление таймера каждую секунду
    const interval = setInterval(updateCountdown, 1000);
});
