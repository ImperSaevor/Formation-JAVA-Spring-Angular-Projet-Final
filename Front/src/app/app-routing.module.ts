import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CompteClientComponent } from './components/compte-client/compte-client.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { FilmComponent } from './components/film/film.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { ExtraComponent } from './components/achat/extra/extra.component';
import { HomeNouveauxFilmsComponent } from './components/home-nouveaux-films/home-nouveaux-films.component';
import { SeanceComponent } from './components/seance/seance.component';
import { CarteCommandeComponent } from './components/carte-commande/carte-commande.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CineInfoComponent } from './components/cine-info/cine-info.component';
import { ActuComponent } from './components/actu/actu.component';
import { Actu1Component } from './components/actu1/actu1.component';
import { Actu2Component } from './components/actu2/actu2.component';
import { TheatreComponent } from './components/theatre/theatre.component';

const routes: Routes = [
  {path:"", redirectTo:"nouveautes",pathMatch:"full"},
  {path:"auth", component: AuthentificationComponent},
  {path:"compte", component: CompteClientComponent},
  {path:"header", component: HeaderComponent},
  {path:"footer", component: FooterComponent},
  {path:"film", component: FilmComponent},
  {path:"cinema", component: CinemaComponent},
  {path:"extra", component: ExtraComponent},
  {path:"seance", component: SeanceComponent},
  {path: 'nouveautes', component: HomeNouveauxFilmsComponent},
  {path: 'carte', component: CarteCommandeComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'cineinfo', component: CineInfoComponent},
  {path: 'actu', component: ActuComponent},
  {path: 'actu1', component: Actu1Component},
  {path: 'actu2', component: Actu2Component},
  {path: 'theatre', component: TheatreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
