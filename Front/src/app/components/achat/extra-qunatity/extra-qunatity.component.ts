import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Extra } from 'src/app/models/extra';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'app-extra-qunatity',
  templateUrl: './extra-qunatity.component.html',
  styleUrls: ['./extra-qunatity.component.css']
})
export class ExtraQunatityComponent implements OnInit {

  @Input()
  nom:string;
  @Input()
  prix:number;
  @Input()
  type:string;
  quantity:number = 0;
  prixTotal:number;

  constructor(private extraService:ExtraService, private route:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.quantity++;
    this.prixTotal = this.prix * this.quantity;

    let extra = new Extra();
    extra.nom = this.nom;
    extra.prix = this.prix;
    extra.type = this.type;
    extra.quantity = this.quantity;

    this.extraService.addExtra(extra, Math.round(this.prixTotal * 100)/100)
    this.route.navigate(['extra']);
  }

  less(){
    if(this.quantity > 0){
      this.quantity--;
      this.prixTotal = this.prix * this.quantity;

      let extra = new Extra();
      extra.nom = this.nom;
      extra.prix = this.prix;
      extra.type = this.type;
      extra.quantity = this.quantity;

      this.extraService.addExtra(extra, Math.round(this.prixTotal * 100)/100)
      this.route.navigate(["extra"]);
    }
  }

}
