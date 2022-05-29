import { Component, OnInit, Input } from '@angular/core';
import { VideoBanner } from "../../models/video-banner";


@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css']
})
export class VideoBannerComponent implements OnInit {

  @Input() videoBanner: VideoBanner = {
    img: "",
    date: "",
    title: "",
    description: "",
    predicador: "",
    categorias: "",
    etiquetas: "",
    videoLink: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
