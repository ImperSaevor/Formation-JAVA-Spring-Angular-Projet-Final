import { Component, Input, OnInit } from '@angular/core';
import { Extra } from 'src/app/models/extra';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css'],
})
export class RecapComponent implements OnInit {
  @Input()
  listeExtra: Array<Extra>;
  @Input()
  prixPlace: number = 0;
  @Input()
  prixTotal: number = 0;

  constructor(private extraService: ExtraService) {
    this.listeExtra = extraService.extras;
    this.prixTotal = this.extraService.getPrixTotal();
  }

  ngOnInit(): void {
    this.listeExtra = new Array<Extra>();
    this.listeExtra = this.extraService.extras;
    this.prixTotal = this.extraService.getPrixTotal();
    console.log(this.prixTotal);
  }

  setPrixTotal():number {
    let total: number = 0;

    this.listeExtra.forEach(element => {
      total += element.prix;
    });

    total += this.prixPlace;

    total = Math.round(total * 100) / 100;

    sessionStorage.setItem("prixCommandeTotal", total.toString());

    return total;
  }
}
