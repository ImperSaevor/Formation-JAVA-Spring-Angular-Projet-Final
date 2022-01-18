import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/models/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nouveaux-films',
  templateUrl: './home-nouveaux-films.component.html',
  styleUrls: ['./home-nouveaux-films.component.css']
})
export class HomeNouveauxFilmsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  listeFilms:Array<Film>
  filmClique:any;

  filmselectionne:Film

  ngOnInit(): void {
    this.filmsALAffiche();
  }
  filmsALAffiche(){
    this.http.get<Array<Film>>("http://localhost:8080/cinema/api/filmSansCinema").subscribe(
      response => {

        this.listeFilms=response
        console.log(this.listeFilms)
    }
    ,
      err => {
      console.log("**************KO")
    }
    )
  }

  goDescFilm(idFilm: number){
    sessionStorage.setItem("idFilmChoisi",idFilm.toString());
    this.router.navigate(['/film']);

  }

  // goDescFilm(film: Film){
  //   this.router.navigate(['/film', film]);
  //   let str:string=JSON.stringify(film);
  //   sessionStorage.setItem("filmsel",str);
  // }

  afficherNouveautes(){
    this.http.get<Array<Film>>("http://localhost:8080/cinema/api/filmNouveautesSansCinema").subscribe(
      response => {
        this.listeFilms=response
        console.log(this.listeFilms)
    }
    ,
      err => {
      console.log("**************KO")
    }
    )
  }

  afficherNextSorties(){
    this.http.get<Array<Film>>("http://localhost:8080/cinema/api/filmNextSortiesSansCinema").subscribe(
      response => {
        this.listeFilms=response
        console.log(this.listeFilms)
    }
    ,
      err => {
      console.log("**************KO")
    }
    )
  }
}
