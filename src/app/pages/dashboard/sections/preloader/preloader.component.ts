import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.alerta();
  }


  alerta(): void{
    //alert("preloader.component.ts");
  }

}
