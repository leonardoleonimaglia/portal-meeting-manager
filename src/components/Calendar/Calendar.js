import React, {Component} from 'react';
import './Calendar.css'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import EventInfo from '../EventInfo/EventInfo'

const localizer = BigCalendar.momentLocalizer(moment)

const myEventsList = [
    {
        id: 0,
        title: 'Teste dia 09',
        allDay: true,
        start: new Date(2019, 5, 9),
        end: new Date(2019, 5, 9),
    },
    {
        id: 1,
        title: 'Teste',
        allDay: false,
        start: new Date(2019, 5, 10),
        end: new Date(2019, 5, 12),
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
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  showMore: total => `+ ver mais (${total})`,
};

class Calendar extends Component {
  render() {
    if (this.props.show) {
      return (
        <div >
          <BigCalendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            views={['month', 'day', 'week']}
            onSelectEvent={event => alert(event.title)}
            //selectable
            //onSelectSlot={this.showModal}
          />
        </div>
      )
    }

    return null
  }
}

export default Calendar