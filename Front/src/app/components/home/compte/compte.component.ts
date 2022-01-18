import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  isConnect:boolean ;
  //classButton:string ="modal fade";
  @Input()
  message:string = "Se connecter";

  constructor(private route:Router) {
    this.isConnect = JSON.parse(sessionStorage.getItem("isConnect"));

    if(this.isConnect){
      this.message = "Mon Compte";
    }else{
      this.message = "Se connecter";
    }
  }

  ngOnInit(): void {
    this.isConnect = JSON.parse(sessionStorage.getItem("isConnect"));

    if(this.isConnect){
      this.message = "Mon Compte";
    }else{
      this.message = "Se connecter";
    }
  }

  auth(){

    this.isConnect = JSON.parse(sessionStorage.getItem("isConnect"));

    if(this.isConnect){
      this.message = "Mon Compte";
      this.route.navigate(["compte"]);
    }else{
      this.message = "Se connecter";
      this.route.navigate(["auth"]);
    }
  }

}
