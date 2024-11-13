// clockWidget.js
function startClock() {
    const clockElement = document.getElementById("clock");
    
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTime(); // Initial call to display time immediately
    setInterval(updateTime, 1000); // Update every second
}

// Initialize the clock when the page loads
window.onload = startClock;

