import { Component, OnInit } from '@angular/core';
import { VideoBanner } from "../../../../../models/video-banner";

@Component({
  selector: 'app-celebraciones',
  templateUrl: './celebraciones.component.html',
  styleUrls: ['./celebraciones.component.css']
})
export class CelebracionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onClickTodos();
  }

  videoBanner1: VideoBanner = {
    img: "https://img.youtube.com/vi/Xo--KrWQ2Hk/maxresdefault.jpg",
    date: "16 de mayo de 2021",
    title: "Una Invitacion Doble",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis, quos quoofficiis illum nulla. Atque quia natus similique?",
    predicador: "Pastor Gabriel Guerrero",
    categorias: "Celebracion principal",
    etiquetas: "texto",
    videoLink: "https://www.youtube.com/watch?v=Xo--KrWQ2Hk"
  }


  videoSwiper1: any = [];


  videoSwiper_series = [
    {
      serie: "Fe Solida",
      video: [
        {
          link: "_zM6vEUotVc",
          date: "2021-03-21",
          title: "Mas intimidad"
        },
        {
          link: "Kf2NgNsOLOE",
          date: "2021-03-28",
          title: "Mas adoración"
        },
        {
          link: "IWBg_4jarDo",
          date: "2021-04-02",
          title: "Victoria Total"
        },
        {
          link: "HIo1-VIDAMU",
          date: "2021-04-11",
          title: "Mas humillacion"
        }
      ]
    },
    {
      serie: "Serie 2",
      video: [
        {
          link: "HIo1-VIDAMU",
          date: "2021-04-11",
          title: "Mas humillacion"
        },
        {
          link: "IWBg_4jarDo",
          date: "2021-04-02",
          title: "Victoria Total"
        },
        {
          link: "Kf2NgNsOLOE",
          date: "2021-03-28",
          title: "Mas adoración"
        },
        {
          link: "_zM6vEUotVc",
          date: "2021-03-21",
          title: "Mas intimidad"
        }
      ]
    }
  ]

  videoSwiper_todos = [
    {
      serie: "Abril 2021",
      video: [
        {
          link: "HIo1-VIDAMU",
          date: "2021-04-11",
          title: "Mas humillacion"
        },
        {
          link: "IWBg_4jarDo",
          date: "2021-04-02",
          title: "Victoria Total"
        }
      ]
    },
    {
      serie: "Marzo 2021",
      video: [
        {
          link: "_zM6vEUotVc",
          date: "2021-03-21",
          title: "Mas intimidad"
        },
        {
          link: "Kf2NgNsOLOE",
          date: "2021-03-28",
          title: "Mas adoración"
        }
      ]
    }
  ]

  onClickTodos(): void {
    document.getElementById("btn_todos")?.classList.add("btn-primary");
    document.getElementById("btn_todos")?.classList.remove("btn-secondary");

    document.getElementById("btn_series")?.classList.remove("btn-primary");
    document.getElementById("btn_series")?.classList.add("btn-secondary");


    this.videoSwiper1 = this.videoSwiper_todos;
  }



  onClickSeries(): void {
    document.getElementById("btn_todos")?.classList.remove("btn-primary");
    document.getElementById("btn_todos")?.classList.add("btn-secondary");

    document.getElementById("btn_series")?.classList.add("btn-primary");
    document.getElementById("btn_series")?.classList.remove("btn-secondary");


    this.videoSwiper1 = this.videoSwiper_series;

  }

}
