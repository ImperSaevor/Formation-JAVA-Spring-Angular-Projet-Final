import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-cine-info',
  templateUrl: './cine-info.component.html',
  styleUrls: ['./cine-info.component.css']
})
export class CineInfoComponent implements OnInit {

  films:Array<Film>;
  isEnter:boolean;
  isConnect:boolean;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){

    let id = sessionStorage.getItem("idCinema");

    this.http.get<Array<Film>>("http://localhost:8080/cinema/api/cinemaAvecFilm/" + id).subscribe(res => {
      this.films = res;
    },
    err => {
      console.log("raté");

    })
  }

  goDescFilm(x){
    sessionStorage.setItem("idFilmChoisi",x);
    this.route.navigate(['film']);

  }

  goSeance(x){
    sessionStorage.setItem("idFilmChoisi",x);
    this.route.navigate(['seance']);
  }

  mouseEnter(){
    this.isEnter = true;
    this.isConnect = JSON.parse(sessionStorage.getItem("isConnected"));
  }

  mouseLeave(){
    this.isEnter = false;
  }

}
