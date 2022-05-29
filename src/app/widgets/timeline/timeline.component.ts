import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.timelineTest();
  }


  //PRUEBAS PARA TIMELINE

  timelineTestJson: any = [
    {
      "color": "blue",
      "destination": "0",
      "title": "¡Inicio del mes de Marzo!",
      "type": "0"
    },
    {
      "buttonLink": "#",
      "color": "blue",
      "destination": "0",
      "message": "Hermanos míos, estudiemos juntos el mensaje que Dios nos ha revelado, adjunto les dejo un documento de gran interés para nuestras clases de discipulado",
      "name": "Pablo de Tarso",
      "time": "01 marzo 06:18 a.m.",
      "title": "te ha enviado un arcihvo",
      "type": "4",
      "userLink": "#"
    },
    {
      "color": "blue",
      "destination": "0",
      "message": "Amados, la Gracias del Señor esté con nosotros. Empecemos el mes con mucho entusiasmo y celebrando que somos parte de la familia de Dios.",
      "name": "Pastor Gabriel Guerrero",
      "time": "01 marzo 08:45 a.m.",
      "title": "te ha enviado un mensaje",
      "type": "2",
      "userLink": "#"
    },
    {
      "color": "green",
      "destination": "0",
      "title": "Abril ¡Estamos en Semana Santa!",
      "type": "0"
    },
    {
      "buttonLink": "#",
      "color": "green",
      "destination": "0",
      "message": "Hijitos míos, par la próxima clase estudiaremos el contenido del documento adjunto",
      "name": "Pablo de Tarso",
      "time": "02 abril 08:18 a.m.",
      "title": "te ha enviado un arcihvo",
      "type": "4",
      "userLink": "#"
    },
    {
      "color": "green",
      "destination": "0",
      "name": "Vida Para las Naciones",
      "time": "04 abril 10:00 a.m.",
      "title": "está transmitiendo en vivo",
      "type": "3",
      "userLink": "#",
      "videoShortLink": "IWBg_4jarDo"
    },
    {
      "color": "green",
      "destination": "0",
      "message": "Amados, la Gloria de Dios sea para todos. Recuerden confirmar asistencia para el servicio del próximo Domingo.",
      "name": "Pastor Gabriel Guerrero",
      "time": "16 abril 05:36 p.m.",
      "title": "te ha enviado un mensaje",
      "type": "2",
      "userLink": "#"
    },
    {
      "color": "green",
      "destination": "0",
      "message": "se ha unido al equipo de tecnología",
      "name": "Eduardo Gonzalez",
      "time": "24 abril 10:15 p.m.",
      "type": "1",
      "userLink": "#"
    }
  ]

  timelineTest(): void {

    //type : 0    timeline time label
    function addTimelineLabel(color: string, title: string) {
      var node =
        "<div class='time-label'>"
        + "  <span class='bg-" + color + "'>" + title + "</span>"
        + "</div>";

      $("#mainTimeline").prepend(node);
    }

    //type : 1    timeline simple message
    function addTimelineSimpleMessage(color: string, time: string, userLink: string, name: string, message: string) {
      var node =
        "<div>"
        + "<i class='fas fa-user bg-" + color + "'></i>"
        + "<div class='timeline-item'>"
        + "<span class='time'><i class='fas fa-clock'></i> " + time + "</span>"
        + "<h3 class='timeline-header no-border'><a href='" + userLink + "'>" + name + "</a> " + message + "</h3>"
        + "</div>"
        + "</div>";


      $("#mainTimeline").prepend(node);
    }

    //type : 2    timeline long message
    function addTimelineLongMessage(color: string, time: string, userLink: string, name: string, title: string, message: string) {
      var node =
        "<div>"
        + "  <i class='fas fa-comments bg-" + color + "'></i>"
        + "  <div class='timeline-item'>"
        + "    <span class='time'><i class='fas fa-clock'></i> " + time + "</span>"
        + "    <h3 class='timeline-header'><a href='" + userLink + "'>" + name + "</a> " + title + "</h3>"
        + "    <div class='timeline-body'>" + message + "</div>"
        + "  </div>"
        + "</div>";


      $("#mainTimeline").prepend(node);
    }

    //type : 3    timeline Video
    function addTimelineVideo(color: string, time: string, userLink: string, name: string, title: string, videoShortLink: string) {
      var node =
        "<div>"
        + "  <i class='fas fa-video bg-" + color + "'></i>"
        + "  <div class='timeline-item'>"
        + "    <span class='time'><i class='fas fa-clock'></i> " + time + "</span>"
        + "    <h3 class='timeline-header'><a href='" + userLink + "'>" + name + "</a> " + title + "</h3>"
        + "    <div class='timeline-body'>"
        + "      <div class='embed-responsive embed-responsive-16by9'>"
        + "        <a target='_blank' href='https://youtu.be/" + videoShortLink + "' class='embed-responsive-item'><img src='https://img.youtube.com/vi/" + videoShortLink + "/maxresdefault.jpg' style='width: 100%;' alt='imgVideo'></a>"
        + "      </div>"
        + "      <div class='timeline-footer'>"
        + "        <a class='btn btn-outline-danger text-gray btn-sm mt-3' target='_blank' href='https://youtu.be/" + videoShortLink + "'><i class='fas fa-play'></i> <b>Ver en Youtube</b></a>"
        + "      </div>"
        + "    </div>"
        + "  </div>"
        + "</div>";


      $("#mainTimeline").prepend(node);
    }

    //type : 4    timeline long message with Action Button
    function addTimelineLongMessageWithButton(color: string, time: string, userLink: string, name: string, title: string, message: string, buttonLink: string) {
      var node =
        "<div>"
        + "  <i class='fas fa-envelope-open-text bg-" + color + "'></i>"
        + "  <div class='timeline-item'>"
        + "    <span class='time'><i class='fas fa-clock'></i> " + time + "</span>"
        + "    <h3 class='timeline-header'><a href='" + userLink + "'>" + name + "</a> " + title + "</h3>"
        + "    <div class='timeline-body'>" + message + "</div>"
        + "      <div class='timeline-footer'>"
        + "        <a class='btn btn-outline-warning text-gray btn-sm' target='_blank' href='" + buttonLink + "'><i class='fas fa-paperclip'></i> Descargar</a>"
        + "      </div>"
        + "  </div>"
        + "</div>";


      $("#mainTimeline").prepend(node);
    }


    console.log(this.timelineTest);
    this.timelineTestJson.forEach((childData: any) => {

      if (childData.type == "0") {
        addTimelineLabel(childData.color, childData.title);
      }


      if (childData.type == "1") {
        addTimelineSimpleMessage(childData.color, childData.time, childData.userLink, childData.name, childData.message);
      }


      if (childData.type == "2") {
        addTimelineLongMessage(childData.color, childData.time, childData.userLink, childData.name, childData.title, childData.message);
      }


      if (childData.type == "3") {
        addTimelineVideo(childData.color, childData.time, childData.userLink, childData.name, childData.title, childData.videoShortLink);
      }


      if (childData.type == "4") {
        addTimelineLongMessageWithButton(childData.color, childData.time, childData.userLink, childData.name, childData.title, childData.message, childData.buttonLink);
      }
    });
  }

}
