import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  events: any = [
    {
      "color": "#ffffff",
      "id": "2021-01-10-1609477200000",
      "start": "2021-01-01",
      "title": "INICIO DE 2021"
    },
    {
      "color": "#ff0000",
      "end": "2021-05-13T12:00:00-05:00",
      "id": "2021-05-13-1618030800000",
      "start": "2021-05-13T10:00:00-05:00",
      "title": "Ayudas"
    }
  ]

  calendarOptions: CalendarOptions = {

    locale: 'es',
    initialView: 'dayGridMonth',
    initialDate: '2021-05-15',    //today()
    navLinks: true,               //Los dias y semanas son clickables
    selectable: true,             //Se pueden seleccionar los cuadros de fecha
    editable: true,               //Se puede editar
    dayMaxEvents: 2,              //Max numero de eventos en una celda

    /*
      dayGrid:  dayGridMonth,dayGridWeek,dayGridDay,dayGrid
      timeGrid: timeGridWeek, timeGridDay, timeGrid
      list:     listYear, listMonth, listWeek, listDay, list
    */
    headerToolbar: {
      start: 'title',
      end: 'dayGridMonth,timeGridWeek,dayGridDay,listMonth'
      //end: 'dayGridMonth,dayGridWeek,dayGridDay'
      //end: 'timeGridWeek,timeGridDay'
      //end: 'listYear,listMonth,listWeek,listDay'
    },

    footerToolbar: {
      start: 'prevYear,prev,next,nextYear,today',
    },

    dateClick: function (info) {

      console.log("");
      console.log("dateClick");
      console.log('Clicked on: ' + info.dateStr);
      //console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //console.log('Current view: ' + info.view.type);
    },

    select: function (info) {

      console.log("");
      console.log("select");
      console.log('Clicked on: ' + info.startStr);

      //calendar.unselect()
    },

    eventClick: function (info) {

      console.log("");
      console.log("eventClick");
      console.log("ID: " + info.event.id);
      console.log("title: " + info.event.title);
      console.log("start: " + info.event.start);
      console.log("end: " + info.event.end);
    },

    eventDrop: function (info) {

      console.log("");
      console.log("eventDrop");
      console.log("ID: " + info.event.id);
      console.log("title: " + info.event.title);
      console.log("start: " + info.event.start);
      console.log("end: " + info.event.end);
      console.log("color: " + info.event.backgroundColor);
    },

    eventResize: function (info) {

      console.log("");
      console.log("eventResizeStop");
      console.log("ID: " + info.event.id);
      console.log("title: " + info.event.title);
      console.log("start: " + info.event.start);
      console.log("end: " + info.event.end);
      console.log("color: " + info.event.backgroundColor);
    },

    events: this.events
  };


}
