import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Extra } from 'src/app/models/extra';
import { Film } from 'src/app/models/film';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'app-carte-commande',
  templateUrl: './carte-commande.component.html',
  styleUrls: ['./carte-commande.component.css']
})
export class CarteCommandeComponent implements OnInit {

  numeroCarte:string = "";
  dateCarte:string = "";
  cryptoCarte:string = "";
  message:string;

  prixTotal:number = 0;
  prixPlace:number = 0;
  nombrePlace:number = 0;
  listeExtra:Array<Extra>;
  film:number;
  idCommande:number;
  idClient:number;

  constructor(private route:Router, private http:HttpClient, private extraService:ExtraService) { }

  ngOnInit(): void {
    this.listeExtra = JSON.parse(sessionStorage.getItem('listeExtra'));
    this.prixPlace = Number.parseFloat(sessionStorage.getItem('prixPlaceTotal'));
    this.prixTotal = Number.parseFloat(sessionStorage.getItem('prixCommandeTotal'));
    this.nombrePlace = Number.parseInt(sessionStorage.getItem("nombrePlace"));
    this.film = Number.parseInt(sessionStorage.getItem('idFilmChoisi'));

    this.idClient = Number.parseInt(JSON.parse(sessionStorage.getItem("client")).id);
    console.log("Client : " + JSON.parse(sessionStorage.getItem("client")).mail);


    this.getClient();
  }

  getClient(){
    this.http.get<Client>("http://localhost:8080/cinema/api/client/" + this.idClient).subscribe(res => {
      if(res.commande.length > 0 && res.commande != null){
        this.idCommande = res.commande.length;
      }else{
        this.idCommande = 0;
      }
      console.log("Ok id commande");

      console.log("1" + this.idCommande);

    },
    err => {
      console.log("Get Raté");

    })
  }

  createCommande(){

    let commandeExtra:string = "";
    let commandePlace:string = "";

    this.listeExtra.forEach(element => {
      commandeExtra += element.nom + "-"+ element.quantity + "-" + element.prix+ ";";
    });

    commandePlace = this.film + "-" + "Plein tarif-"+this.nombrePlace + "-" + this.prixPlace;

    console.log("2"+ this.idCommande);


    let body = {
      "commandeExtra":""+ commandeExtra +"",
      "commandePlace":""+ commandePlace +"",
      "prixTotal":""+ this.prixTotal +"",
      "id":"" + this.idCommande + ""
  }


    this.http.put("http://localhost:8080/cinema/api/clientCommande/" + this.idClient, body).subscribe(res => {
      console.log("ok");

      sessionStorage.setItem('listeExtra', null);
      sessionStorage.setItem('prixPlaceTotal', null);
      sessionStorage.setItem('prixCommandeTotal',null);
      sessionStorage.setItem("nombrePlace", null);

      let extra:Array<Extra> = new Array<Extra>();

      this.extraService.setExtras(extra);

    },
    err => {
      console.log("raté");

    })
  }

  paye(){

    if(this.numeroCarte != "" && this.dateCarte != "" && this.cryptoCarte != ""){
      this.createCommande();
      this.route.navigate(["confirmation"])
    }else{
      this.message = "Il faut remplir tous les champs"
    }

  }

}
