document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const checkInChart = document.getElementById("check-in-chart");

    // Get the current month and year
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Function to generate the days of the month
    function generateCalendar(month, year) {
        calendar.innerHTML = ""; // Clear previous calendar
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day1";
            dayElement.textContent = day;
            
            // Check-in functionality
            dayElement.addEventListener("click", function() {
                this.classList.toggle("checked-in");
                updateCheckInChart();
            });

            calendar.appendChild(dayElement);
        }
    }

    // Function to update the check-in chart
    function updateCheckInChart() {
        const checkedInDays = document.querySelectorAll(".day1.checked-in").length;
        checkInChart.textContent = `Days Checked-In: ${checkedInDays}`;
    }

    // Generate the calendar for the current month and year
    generateCalendar(currentMonth, currentYear);
});

