import { Component, Input, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Thumbs]);

import { Gallery } from "../../models/gallery";


@Component({
  selector: 'app-swiper-gallery',
  templateUrl: './swiper-gallery.component.html',
  styleUrls: ['./swiper-gallery.component.scss']
})
export class SwiperGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() gallery: Gallery = {
    title: "",
    description: "",
    images: []
  };

  images: string[] = [
    "https://cdn.pixabay.com/photo/2015/09/18/11/37/child-945422_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/05/04/19/50/holding-hands-752878_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/08/07/01/15/cross-2598303_960_720.jpg",
    "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  thumbsSwiper: any;

  onSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  onSlideChange(swiper: any) {
    this.thumbsSwiper = swiper;

    /*console.log(swiper);
    console.log(swiper.activeIndex);
    console.log(swiper.imagesToLoad[swiper.activeIndex]);

    console.log(swiper.thumbs);
    console.log(swiper.thumbs.swiper);
    console.log(swiper.thumbs.swiper?.imagesToLoad);
    console.log(swiper.thumbs.swiper?.imagesToLoad[swiper.activeIndex]);*/


    var img = swiper.thumbs.swiper?.imagesToLoad
    if (img) {
      for (var index: number = 0; index < swiper.imagesLoaded; index++) {
        var img = swiper.thumbs.swiper?.imagesToLoad[index]
        img.classList.remove("swiper-slide-thumb-active");
        img.classList.add("swiper-slide-thumb");
      }

      var img = swiper.thumbs.swiper?.imagesToLoad[swiper.activeIndex]
      img.classList.add("swiper-slide-thumb-active");

      console.log(img)
    }

  }

}
