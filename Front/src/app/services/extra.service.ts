import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Extra } from '../models/extra';

@Injectable({
  providedIn: 'root',
})
export class ExtraService {
  extras: Array<Extra> = new Array<Extra>();
  isInExtras: boolean;
  extrasChange: Subject<Array<Extra>> = new Subject<Array<Extra>>();

  prixPlace: number;

  prixCommandeTotal:number;

  constructor() {
    this.extrasChange.subscribe((res) => {
      this.extras = new Array<Extra>();
    });
  }

  getExtras(): Array<Extra> {
    return this.extras;
  }

  setExtras(extras:Array<Extra> ){
    this.extras = extras;
  }

  getPrixTotal(): number{
    this.prixCommandeTotal = Number.parseFloat(sessionStorage.getItem('prixCommandeTotal'));
    return this.prixCommandeTotal;
  }

  addExtra(extra: Extra, prixTotal: number) {
    this.prixCommandeTotal = 0;
    if (this.extras.length > 0) {
      for (let i = 0; i < this.extras.length; i++) {
        if (this.extras[i].nom == extra.nom) {
          this.extras[i].prix = prixTotal;
          this.extras[i].quantity = extra.quantity;
        }
        this.prixCommandeTotal += this.extras[i].prix;
      }

      var index = this.extras.findIndex(x => x.nom==extra.nom);
      index === -1 ? this.extras.push(extra) : console.log("object already exists")

    } else {
      this.extras.push(extra);
    }

    this.prixCommandeTotal += Number.parseFloat(sessionStorage.getItem("prixPlaceTotal"));

    this.prixCommandeTotal = Math.round(this.prixCommandeTotal * 100) / 100;

    sessionStorage.setItem("listeExtra", JSON.stringify(this.extras));

  }
}
