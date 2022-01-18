import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goDescActu(x:number){
    this.route.navigate(["actu"+ x]);
  }

}
