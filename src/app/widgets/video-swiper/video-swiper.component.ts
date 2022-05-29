import { Component, OnInit, Input } from '@angular/core';
import { VideoSwiper } from "../../models/video-swiper";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Thumbs]);

@Component({
  selector: 'app-video-swiper',
  templateUrl: './video-swiper.component.html',
  styleUrls: ['./video-swiper.component.scss']
})
export class VideoSwiperComponent implements OnInit {

  constructor() { }


  @Input() videoSwiper: VideoSwiper[] = []

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
  }

  onSlideChange(swiper: any) {
  }

}

