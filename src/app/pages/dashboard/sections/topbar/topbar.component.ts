import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  darkmode: number = 2;

  darkmodeChange(num: number) {

    /*
     *  0 -> Tema claro
     *  1 -> Tema oscuro
     *  2 -> Tema super oscuro
    */

    if (this.darkmode === 0) {        // Pasa de tema claro a tema oscuro
      this.darkmode = 1;

      $('#aside_bar').removeClass('sidebar-dark-primary');
      $('#control_bar').removeClass('control-sidebar-dark');

      $('body').addClass('dark-mode');
      $('#aside_bar').addClass('sidebar-light-primary');
      $('#control_bar').addClass('control-sidebar-dark');
      $('.content-wrapper').css('background', 'linear-gradient(to right, #5e6a75, #333)');


    }
    else if (this.darkmode === 1) {        // Pasa de tema oscuro a tema super oscuro
      this.darkmode = 2;

      $('#aside_bar').removeClass('sidebar-light-primary');
      $('#control_bar').removeClass('control-sidebar-light');

      $('body').addClass('dark-mode');
      $('#aside_bar').addClass('sidebar-dark-primary');
      $('#control_bar').addClass('control-sidebar-dark');
      $('.content-wrapper').css('background', 'linear-gradient(to right, #000, #333)');


    }
    else if (this.darkmode === 2) {        // Pasa de tema super oscuro a tema claro
      this.darkmode = 0;

      $('body').removeClass('dark-mode');
      $('#aside_bar').removeClass('sidebar-light-primary');
      $('#control_bar').removeClass('control-sidebar-light');

      $('#aside_bar').addClass('sidebar-dark-primary');
      $('#control_bar').addClass('control-sidebar-dark');
      $('.content-wrapper').css('background', 'linear-gradient(to right, #fff, #ccc)');

    }
  }


  ngOnInit(): void {
    this.darkmodeChange(this.darkmode);
  }

}
