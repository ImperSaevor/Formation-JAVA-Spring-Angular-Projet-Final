import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isConnect:boolean;

  constructor() {
    this.isConnect = JSON.parse(sessionStorage.getItem("isConnect"));
  }

  ngOnInit(): void {

    this.isConnect = JSON.parse(sessionStorage.getItem("isConnect"));
  }



}
