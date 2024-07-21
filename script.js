let isRainy = true;

function toggleWeather() {
    const rainyCloud = document.querySelector('.rainy');
    const sunnyCloud = document.querySelector('.sunny');

    if (isRainy) {
        rainyCloud.style.opacity = 0;
        sunnyCloud.style.opacity = 1;
    } else {
        rainyCloud.style.opacity = 1;
        sunnyCloud.style.opacity = 0;
    }
    isRainy = !isRainy;
}
