import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {

  client:Client;

  constructor(private route:Router) { }

  ngOnInit(): void {
    let temp = JSON.parse(sessionStorage.getItem('client'));

    this.client = new Client();

    this.client.nom = temp.nom;
    this.client.prenom = temp.prenom;
    this.client.cp = temp.cp;
    this.client.date = temp.date;
    this.client.mail = temp.mail;
    this.client.password = temp.password;
    this.client.commande = temp.commande;

  }

  disconnect(){
    sessionStorage.setItem("isConnect", "false");
    sessionStorage.setItem('client', null);
    this.route.navigate([""]).then(() => {
      window.location.reload();
    });
  }

}
