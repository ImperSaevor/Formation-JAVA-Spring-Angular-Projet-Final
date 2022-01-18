import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CineInfoComponent } from '../cine-info/cine-info.component';
import { Cinema } from 'src/app/models/cinema';
import { CineInfo } from 'src/app/models/cine-info';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  constructor(private http: HttpClient, private route:Router) { }

  mesCinemas:Array<Cinema> = new Array<Cinema>();
  nomcinema:string;
  cinema:Cinema;

  ngOnInit(): void {
    this.getCinemas();

  }

  getCinemas():void{
    this.http.get<Array<Cinema>>("http://localhost:8080/cinema/api/cinemaSansFilm").subscribe(
      response => {
        this.mesCinemas=response
    }
    ,
      err => {
      console.log("**************KO")
    }
    )
  }
  print(){

  }
  goDescFilm(x){
    this.route.navigate(['/uncinema', x]);

  }

  seance(cine:Cinema){
    this.cinema = cine;
    sessionStorage.setItem("idCinema", this.cinema.id.toString());
    this.route.navigate(["cineinfo"]);

  }

}
