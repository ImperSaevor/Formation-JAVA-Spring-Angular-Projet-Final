import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { Extra } from 'src/app/models/extra';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
})
export class ExtraComponent implements OnInit {
  listeCinema: Array<Cinema>;
  cinemaNom: string;
  listeBoisson: Array<Extra> = new Array<Extra>();
  listeNourriture: Array<Extra> = new Array<Extra>();
  listeExtras: Array<Extra>;
  prixCommandeTotal: number = 0;
  prixPlaceTotal: number = 0;

  constructor(private http: HttpClient, private extraService: ExtraService, private route:Router) {
    this.prixCommandeTotal = this.extraService.getPrixTotal();
  }

  ngOnInit(): void {
    this.getExtra();
    this.prixCommandeTotal = this.extraService.getPrixTotal();
    this.prixPlaceTotal = Number.parseFloat(sessionStorage.getItem('prixPlaceTotal'));
    console.log(this.prixCommandeTotal);
  }

  getListeExtra() {
    this.listeExtras = this.extraService.extras;
  }

  getPrixTotal(){
    this.prixCommandeTotal = this.extraService.getPrixTotal();
  }

  getExtra() {
    this.http
      .get<Array<Cinema>>('http://localhost:8080/cinema/api/cinemaSansFilm')
      .subscribe(
        (response) => {
          this.listeCinema = response;
          console.log(this.listeCinema);

          this.cinemaNom = sessionStorage.getItem('nomCinema');

          for (let i = 0; i < this.listeCinema.length; i++) {
            if (this.listeCinema[i].nom == this.cinemaNom) {
              for (let j = 0; j < this.listeCinema[i].extra.length; j++) {
                sessionStorage.setItem(
                  'extraLength',
                  this.listeCinema[i].extra.length.toString()
                );
                if (this.listeCinema[i].extra[j].type === 'boisson') {
                  this.listeBoisson.push(this.listeCinema[i].extra[j]);
                } else if (this.listeCinema[i].extra[j].type === 'nourriture') {
                  this.listeNourriture.push(this.listeCinema[i].extra[j]);
                }
              }
              break;
            }
          }
        },
        (err) => {
          console.log('**KO');
        }
      );
  }

  validation() {
    this.route.navigate(["carte"])
  }
}
