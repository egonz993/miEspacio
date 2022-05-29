import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title: string = '';
  activeRout: string = '';


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  rout: string = "";

  ngOnInit() {
    this.setRout(window.location.href.split('#/')[1])

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => { this.setRout(window.location.href.split('#/')[1]) });
  }

  setRout(rout: string): void {

    switch (rout) {
      case 'user':
        this.activeRout = 'Usuario';
        this.title = 'Usuario';
        break;
      case 'admin':
        this.activeRout = 'Administrador';
        this.title = 'Administrador';
        break;
      case 'reservas':
        this.activeRout = 'Reservaciones';
        this.title = 'Reservaciones';
        break;
      case 'ministerios':
        this.activeRout = 'Ministerios';
        this.title = 'Ministerios';
        break;
      case 'grupos':
        this.activeRout = 'Grupos';
        this.title = 'Grupos';
        break;
      case 'celebraciones':
        this.activeRout = 'Celebraciones';
        this.title = 'Celebraciones';
        break;
      case 'calendario':
        this.activeRout = 'Calendario';
        this.title = 'Calendario';
        break;
      case 'galeria':
        this.activeRout = 'Galeria';
        this.title = 'Galeria';
        break;
      case 'devocionales':
        this.activeRout = 'Devocionales';
        this.title = 'Devocionales';
        break;
      case 'estudio-biblico':
        this.activeRout = 'Estudio Biblico';
        this.title = 'Estudio Biblico';
        break;
      case 'discipulados':
        this.activeRout = 'Discipulados';
        this.title = 'Discipulados';
        break;
      case 'config':
        this.activeRout = 'Configuracion';
        this.title = 'Configuracion';
        break;
      case 'foro':
        this.activeRout = 'Foro';
        this.title = 'Foro';
        break;

      default:
        this.title = 'Mi Espacio';
        this.activeRout = 'Mi Espacio';
        break;
    }
  }

}
