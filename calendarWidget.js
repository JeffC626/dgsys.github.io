document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const checkInChart = document.getElementById("check-in-chart");
    const calendarWeek = document.getElementById("calendar-weekdays");

    // Get the current month and year
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentMonthName = now.toLocaleString('default', { month: 'long' });
    const currentYear = now.getFullYear();
    document.getElementById("current-date").innerText = `${currentYear} - ${currentMonthName}`;


    // Function to generate the days of the month
    function generateCalendar(month, year) {
        calendar.innerHTML = ""; // Clear previous calendar
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        // 获取当前月份的第一天和最后一天
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
        // 获取当前月份的第一天是星期几
            const startDay = firstDay.getDay();
        // 填充日历前的空白      
        for (let i = 0; i < startDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day1');
            calendar.appendChild(emptyDay);
        }
        
        //for (let day = 1; day <= daysInMonth; day++) {
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day1";
            dayElement.textContent = day;
            //dayElement.innerText = day;

            // 高亮当前日期
            const currentDate = new Date();
            if (currentDate.getFullYear() === year && currentDate.getMonth() === month && currentDate.getDate() === day) {
              dayElement.classList.add('today');
            }
            
            // Check-in functionality
            let checkInDays = parseInt(localStorage.getItem('checkInDays')) || 0;
            //let checkInDays = localStorage.getItem('checkInDays');
                checkInChart.textContent = `Days Checked-In: ${checkInDays}`;
            dayElement.addEventListener("click", function() {
                this.classList.toggle("checked-in");
                updateCheckInChart();
            });

            calendar.appendChild(dayElement);
        }
    }

    // Function to update the check-in chart
    function updateCheckInChart() {
        //const checkedInDays = document.querySelectorAll(".day1.checked-in").length;
        const a = localStorage.getItem('checkInDays');
        const b = document.querySelectorAll(".day1.checked-in").length;
        const checkedInDays = b;
        checkInChart.textContent = `Days Checked-In: ${checkedInDays}`;
        localStorage.setItem('checkInDays', checkedInDays); // Save to localStorage
    }

    // Generate the calendar for the current month and year
    generateCalendar(currentMonth, currentYear);

//localStorage.clear();
});

