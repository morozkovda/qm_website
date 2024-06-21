let clickCount = 0;
const maxClicks = 10;
const wordElement = document.getElementById('easter-egg');

wordElement.addEventListener('click', () => {
    clickCount++;
    if (clickCount >= maxClicks) {
        // Redirect to Rick Roll video
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});