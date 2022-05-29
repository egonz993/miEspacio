import { Component, OnInit } from '@angular/core';
import { Gallery } from "../../../../../models/gallery";


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})


export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.myGallery.push(this.galeria1);
    this.myGallery.push(this.galeria2);
  }

  myGallery: Gallery[] = []

  galeria1: Gallery = {
    title: "Album 01",
    description: "Esta es la galería número 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium numquam, aliquam fuga hic doloremque maxime reprehenderit, quia adipisci placeat dolorum explicabo voluptatem officiis, delectus exercitationem eaque libero quas eos!",
    images: [
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
    ]
  };

  galeria2: Gallery = {
    title: "Album 02",
    description: "Esta es la galería número 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium numquam, aliquam fuga hic doloremque maxime reprehenderit, quia adipisci placeat dolorum explicabo voluptatem officiis, delectus exercitationem eaque libero quas eos!",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/09/18/11/37/child-945422_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/01/15/cross-2598303_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/04/19/50/holding-hands-752878_960_720.jpg",
      "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_960_720.jpg",
      "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ]
  };






}





