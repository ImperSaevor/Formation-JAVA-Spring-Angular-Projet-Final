import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private allClient:any;
  private listeClient:Array<any>;

  constructor(private http:HttpClient) { }


  findAll() : Observable<any>{

    this.http.get("http://localhost:8080/cinema/api/client").subscribe(res => {
      this.allClient = res;
      this.listeClient = new Array();
      for (const iterator of this.allClient) {
        this.listeClient.push(iterator);
      }
      //console.log(this.listeClient);
    },
    err => {
      console.log(err);
    })

    return of(this.listeClient);
  }

  createClient(body:Client){

    console.log(JSON.stringify(body));


    this.http.post("http://localhost:8080/cinema/api/client", JSON.stringify(body),
    {headers: { "Content-Type": "application/json; charset=UTF-8" }}
    ).subscribe(
      res => {
        console.log("OK");
      },
      err => {
        console.log(err);
      })
  }
}
