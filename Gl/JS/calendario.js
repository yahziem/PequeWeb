document.addEventListener("DOMContentLoaded", function() {
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const monthYearDisplay = document.getElementById('monthYear');
    const daysContainer = document.querySelector('.days');
    const eventDateInput = document.getElementById('eventDate');
    const eventNameInput = document.getElementById('eventName');
    const addEventBtn = document.getElementById('addEvent');
    const eventList = document.getElementById('eventList');

    let currentDate = new Date();

    renderCalendar(currentDate);
    loadEvents();

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    daysContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('day')) {
            const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), event.target.textContent);
            eventDateInput.value = formatDate(selectedDate);
        }
    });

    addEventBtn.addEventListener('click', () => {
        const eventDate = eventDateInput.value;
        const eventName = eventNameInput.value;

        if (eventDate && eventName) {
            const event = { date: eventDate, name: eventName }; // Crear el objeto de evento
            saveEvent(event); // Guardar el evento en el servidor
            renderEvent(event); // Mostrar el evento en el calendario
            clearInputs();
        }
    });

    function renderCalendar(date) {
        daysContainer.innerHTML = '';
        monthYearDisplay.textContent = getMonthYearString(date);

        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const day = new Date(date.getFullYear(), date.getMonth(), i);
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;

            if (day >= firstDayOfMonth && day <= lastDayOfMonth) {
                if (isEventDate(day)) {
                    dayElement.classList.add('event');
                }
                if (isSameDay(day, new Date())) {
                    dayElement.classList.add('today');
                }
                daysContainer.appendChild(dayElement);
            } else {
                dayElement.classList.add('empty');
                daysContainer.appendChild(dayElement);
            }
        }
    }

    function getMonthYearString(date) {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    function isEventDate(date) {
        const events = eventList.children;
        for (let i = 0; i < events.length; i++) {
            const eventText = events[i].textContent;
            const [eventDate] = eventText.split(':');
            if (eventDate.trim() === formatDate(date)) {
                return true;
            }
        }
        return false;
    }

    function isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }

    function saveEvent(event) {
        fetch('/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
        .then(data => console.log('Event saved:', data))
        .catch(error => console.error('Error saving event:', error));
    }

    function renderEvent(event) {
        const eventItem = document.createElement('li');
        eventItem.textContent = `${event.date}: ${event.name}`;
        eventItem.classList.add('event-item');
        eventList.appendChild(eventItem);
    }

    function loadEvents() {
        fetch('/events')
        .then(response => response.json())
        .then(data => {
            data.forEach(event => renderEvent(event));
            renderCalendar(); // Llamar a la función para renderizar el calendario después de cargar los eventos
        })
        .catch(error => console.error('Error loading events:', error));
    }

    function clearInputs() {
        eventDateInput.value = '';
        eventNameInput.value = '';
    }
});
