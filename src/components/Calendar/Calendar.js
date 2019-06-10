import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';

const localizer = BigCalendar.momentLocalizer(moment)

const myEventsList = [
    {
        id: 0,
        title: 'Teste dia 09',
        allDay: true,
        start: new Date(2019, 6, 9),
        end: new Date(2019, 6, 9),
    },
    {
        id: 1,
        title: 'Teste',
        allDay: true,
        start: new Date(2019, 6, 10),
        end: new Date(2019, 6, 10),
    },
    {
        id: 2,
        title: 'Teste',
        allDay: true,
        start: new Date(2019, 6, 10),
        end: new Date(2019, 6, 10),
    },
    {
        id: 3,
        title: 'Teste',
        allDay: true,
        start: new Date(2019, 6, 10),
        end: new Date(2019, 6, 10),
    },
    {
        id: 4,
        title: 'Teste',
        allDay: true,
        start: new Date(2019, 6, 10),
        end: new Date(2019, 6, 10),
    }
]

const messages = {
  allDay: 'Dia todo',
  previous: '<',
  next: '>',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  showMore: total => `+ ver mais (${total})`,
};

let Calendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
    />
  </div>
)

export default Calendar