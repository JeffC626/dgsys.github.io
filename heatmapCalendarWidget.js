document.addEventListener("DOMContentLoaded", function() {
    const heatmapCalendar = document.getElementById("heatmap-calendar");

    // Example data structure for check-in frequency
    // You can replace this with your own logic to retrieve real data
    const checkInData = {}; // Object to store check-in counts per day

    // Get the current month and year
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Function to generate days in the month and populate the heatmap
    function generateHeatmapCalendar(month, year) {
        heatmapCalendar.innerHTML = ""; // Clear previous content
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day";

            const dayContent = document.createElement("div");
            dayContent.className = "day-content";
            dayContent.textContent = day;

            // Check-in logic: Increment check-in count on click
            dayContent.addEventListener("click", function() {
                const key = `${year}-${month + 1}-${day}`;
                checkInData[key] = (checkInData[key] || 0) + 1;
                updateHeatmap(dayElement, checkInData[key]);
            });

            dayElement.appendChild(dayContent);
            heatmapCalendar.appendChild(dayElement);
        }
    }

    // Function to update the color based on check-in frequency
    function updateHeatmap(element, count) {
        element.classList.remove("low", "medium", "high", "very-high");
        if (count >= 10) {
            element.classList.add("very-high");
        } else if (count >= 7) {
            element.classList.add("high");
        } else if (count >= 4) {
            element.classList.add("medium");
        } else if (count >= 1) {
            element.classList.add("low");
        }
    }

    // Generate the heatmap calendar for the current month and year
    generateHeatmapCalendar(currentMonth, currentYear);
});

