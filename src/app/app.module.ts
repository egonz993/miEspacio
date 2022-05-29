import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* RUTAS */
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


/* COMPONENTES */
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PreloaderComponent } from './pages/dashboard/sections/preloader/preloader.component';
import { ContentComponent } from './pages/dashboard/sections/content/content.component';
import { ControlbarComponent } from './pages/dashboard/sections/controlbar/controlbar.component';
import { FootComponent } from './pages/dashboard/sections/foot/foot.component';
import { SidebarComponent } from './pages/dashboard/sections/sidebar/sidebar.component';
import { TopbarComponent } from './pages/dashboard/sections/topbar/topbar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UserloginComponent } from './pages/signin/sections/userlogin/userlogin.component';
import { UserregisterComponent } from './pages/signin/sections/userregister/userregister.component';
import { MiEspacioComponent } from './pages/dashboard/sections/content/mi-espacio/mi-espacio.component';
import { UserComponent } from './pages/dashboard/sections/content/user/user.component';
import { AdminComponent } from './pages/dashboard/sections/content/admin/admin.component';
import { ReservasComponent } from './pages/dashboard/sections/content/reservas/reservas.component';
import { CelebracionesComponent } from './pages/dashboard/sections/content/celebraciones/celebraciones.component';
import { CalendarioComponent } from './pages/dashboard/sections/content/calendario/calendario.component';
import { GaleriaComponent } from './pages/dashboard/sections/content/galeria/galeria.component';
import { DevocionalesComponent } from './pages/dashboard/sections/content/devocionales/devocionales.component';
import { EstudioBiblicoComponent } from './pages/dashboard/sections/content/estudio-biblico/estudio-biblico.component';
import { DiscipuladosComponent } from './pages/dashboard/sections/content/discipulados/discipulados.component';
import { MinisteriosComponent } from './pages/dashboard/sections/content/ministerios/ministerios.component';
import { GruposComponent } from './pages/dashboard/sections/content/grupos/grupos.component';
import { ConfigComponent } from './pages/dashboard/sections/content/config/config.component';
import { UserCardComponent } from './widgets/user-card/user-card.component';
import { TimelineComponent } from './widgets/timeline/timeline.component';
import { FullCalendarComponent } from './widgets/full-calendar/full-calendar.component';
import { SwiperGalleryComponent } from './widgets/swiper-gallery/swiper-gallery.component';
import { VideoBannerComponent } from './widgets/video-banner/video-banner.component';
import { VideoSwiperComponent } from './widgets/video-swiper/video-swiper.component';
import { ForoComponent } from './pages/dashboard/sections/content/foro/foro.component';


/* FIREBASE */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* ENVIROMENT */
import { environment } from '../environments/environment';


/* FULL CALENDAR*/
import { CalendarContent, FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


/* GALERIA SWIPER */
import { SwiperModule } from 'swiper/angular';


FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin,
  listPlugin
]);






const routs: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        children: [
          {
            path: '',
            component: MiEspacioComponent
          },
          {
            path: 'user',
            component: UserComponent
          },
          {
            path: 'admin',
            component: AdminComponent
          },
          {
            path: 'reservas',
            component: ReservasComponent
          },
          {
            path: 'celebraciones',
            component: CelebracionesComponent
          },
          {
            path: 'calendario',
            component: CalendarioComponent
          },
          {
            path: 'galeria',
            component: GaleriaComponent
          },
          {
            path: 'devocionales',
            component: DevocionalesComponent
          },
          {
            path: 'estudio-biblico',
            component: EstudioBiblicoComponent
          },
          {
            path: 'discipulados',
            component: DiscipuladosComponent
          },
          {
            path: 'ministerios',
            component: MinisteriosComponent
          },
          {
            path: 'grupos',
            component: GruposComponent
          },
          {
            path: 'config',
            component: ConfigComponent
          },
          {
            path: 'foro',
            component: ForoComponent
          }
        ]
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'register'
      },
      {
        path: 'login',
        component: UserloginComponent
      },
      {
        path: 'register',
        component: UserregisterComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    UserloginComponent,
    UserregisterComponent,
    DashboardComponent,
    ContentComponent,
    ControlbarComponent,
    FootComponent,
    PreloaderComponent,
    SidebarComponent,
    TopbarComponent,
    AdminComponent,
    CalendarioComponent,
    CelebracionesComponent,
    ConfigComponent,
    DevocionalesComponent,
    DiscipuladosComponent,
    EstudioBiblicoComponent,
    GaleriaComponent,
    GruposComponent,
    MiEspacioComponent,
    MinisteriosComponent,
    ReservasComponent,
    UserComponent,
    UserCardComponent,
    TimelineComponent,
    FullCalendarComponent,
    SwiperGalleryComponent,
    VideoBannerComponent,
    VideoSwiperComponent,
    ForoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule, AngularFireStorageModule,
    FullCalendarModule,
    AppRoutingModule,
    SwiperModule,
    RouterModule.forRoot(routs, {
      /*enableTracing: true,*/
      paramsInheritanceStrategy: 'always',
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
