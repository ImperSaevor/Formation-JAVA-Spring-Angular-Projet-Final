import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seance } from 'src/app/seance';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css'],
})
export class SeanceComponent implements OnInit {
  seances: Array<Seance>;
  mesCinemas: Array<String>;

  id: number = 1;
  cine: string = 'Pathé_Nice';
  nomcinema: string;

  monfilm: number;
  nomcine: string;
  film:Film;

  seance: Seance;

  isSeanceSelect: boolean;
  quantity: number = 0;
  prixTotal: number;
  prixPleinTarif: number = 4.8;
  isDisabled: boolean;

  constructor(
    private http: HttpClient,
    private route: Router,
    private placeService: ExtraService
  ) {}

  ngOnInit(): void {
    this.monfilm = JSON.parse(sessionStorage.getItem('idFilmChoisi'));
    this.getFilm();
    this.getCinemas();
  }

  print() {
    this.nomcine = this.nomcinema;
    //console.log(this.nomcine);

    sessionStorage.setItem("nomCinema", this.nomcine);
    this.route.navigate(["seance"]).then(() => {
      this.getSeances();
    })
  }

  routeToExtra() {
    this.route.navigate(['extra']);
  }
  getCinemas(): void {
    this.http
      .get<Array<String>>('http://localhost:8080/cinema/api/cinema/noms/')
      .subscribe(
        (response) => {
          this.mesCinemas = response;
        },
        (err) => {
          console.log('**************KO');
        }
      );
  }

  getSeances(): void {
    this.http
      .get<Array<Seance>>(
        'http://localhost:8080/cinema/api/seance' +
          '/' +
          this.nomcine +
          '/' +
          this.monfilm
      )
      .subscribe(
        (response) => {

          this.seances = response;
          this.seances.sort((a: Seance, b: Seance) => {
            if (
              Number.parseInt(a.horaire.split('h')[0]) >
              Number.parseInt(b.horaire.split('h')[0])
            ) {
              return 1;
            } else if (
              Number.parseInt(a.horaire.split('h')[0]) ==
              Number.parseInt(b.horaire.split('h')[0])
            ) {
              if (
                Number.parseInt(a.horaire.split('h')[1]) >
                Number.parseInt(b.horaire.split('h')[1])
              ) {
                return 1;
              } else {
                return -1;
              }
            } else {
              return -1;
            }
          });
          console.log(this.seances);
        },
        (err) => {
          console.log('**************KO');
        }
      );
  }

  getFilm(){
    this.http.get<Film>("http://localhost:8080/cinema/api/film/"+this.monfilm).subscribe(
      response => {

        this.film=response
        console.log(this.monfilm)
    }
    ,
      err => {
      console.log("**************KO")
    }
    )
  }

  seanceChoose(seance: Seance) {
    this.isSeanceSelect = true;
    this.seance = seance;
    sessionStorage.setItem('seance', JSON.stringify(this.seance));
  }

  add() {
    this.quantity++;
    this.prixTotal = this.prixPleinTarif * this.quantity;

    this.prixTotal = Math.round(this.prixTotal * 100) / 100;
    console.log(this.prixTotal);

    this.placeService.prixPlace = this.prixTotal;
    sessionStorage.setItem("prixPlaceTotal", this.prixTotal.toString());
    sessionStorage.setItem("nombrePlace", this.quantity.toString());

    if (this.quantity < this.seance.prest) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  less() {
    this.isDisabled = false;
    if (this.quantity > 0) {
      this.quantity--;
      this.prixTotal = this.prixPleinTarif * this.quantity;
      this.prixTotal = Math.round(this.prixTotal * 100) / 100;
      console.log(this.prixTotal);

      this.placeService.prixPlace = this.prixTotal;
      sessionStorage.setItem("prixPlaceTotal", this.prixTotal.toString());
      sessionStorage.setItem("nombrePlace", this.quantity.toString());
    }
  }

  next(){
    sessionStorage.setItem("prixCommandeTotal", this.prixTotal.toString());
    this.route.navigate(["extra"]);
  }
}
