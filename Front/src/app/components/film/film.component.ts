import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/models/film';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  monfilm:Film
  id:number=1
  vid:String
  video='https://www.youtube.com/embed/EFTJtAwsVfY'
  safeUrl: any;

  isConnected:boolean;
  constructor(private http: HttpClient, private router:Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.isConnected = JSON.parse(sessionStorage.getItem("isConnect"));

    this.id = parseInt(sessionStorage.getItem("idFilmChoisi")) ;
    this.http.get<Film>("http://localhost:8080/cinema/api/film/"+this.id).subscribe(
      response => {

        this.monfilm=response;
        this.getSafeUrl(this.monfilm.video)
        console.log(this.monfilm)
        //this.vid=this.monfilm.video
    }
    ,
      err => {
      console.log("**************KO")
    }
    )
  }
  getVideo(){


  }
  seance(){
    this.router.navigate(['/seance']);
  }

  getSafeUrl(url){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
