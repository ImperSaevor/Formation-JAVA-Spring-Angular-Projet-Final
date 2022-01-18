import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteClientComponent } from './components/compte-client/compte-client.component';
import { HeaderComponent } from './components/home/header/header.component';
import { CompteComponent } from './components/home/compte/compte.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { FilmComponent } from './components/film/film.component';
import { ExtraComponent } from './components/achat/extra/extra.component';
import { ExtraQunatityComponent } from './components/achat/extra-qunatity/extra-qunatity.component';
import { SeanceComponent } from './components/seance/seance.component';
import { HomeNouveauxFilmsComponent } from './components/home-nouveaux-films/home-nouveaux-films.component';
import { RecapComponent } from './components/achat/recap/recap.component';
import { CineInfoComponent } from './components/cine-info/cine-info.component';
import { CarteCommandeComponent } from './components/carte-commande/carte-commande.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ActuComponent } from './components/actu/actu.component';
import { Actu1Component } from './components/actu1/actu1.component';
import { Actu2Component } from './components/actu2/actu2.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { TechnosComponent } from './components/home/technos/technos.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    CompteClientComponent,
    HeaderComponent,
    CompteComponent,
    FooterComponent,
    CinemaComponent,
    FilmComponent,
    ExtraComponent,
    ExtraQunatityComponent,
    SeanceComponent,
    HomeNouveauxFilmsComponent,
    RecapComponent,
    CineInfoComponent,
    CarteCommandeComponent,
    ConfirmationComponent,
    ActuComponent,
    Actu1Component,
    Actu2Component,
    TheatreComponent,
    TechnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
