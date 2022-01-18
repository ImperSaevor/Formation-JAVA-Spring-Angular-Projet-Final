import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { validate } from 'email-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {
  client: Client;
  liste: Array<any>;
  message: string = '';
  isDiseable: boolean = true;
  @Output()
  connectEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  isConnect: boolean;

  classNom: string = 'form-control';
  classPrenom: string = 'form-control';
  classMail: string = 'form-control';
  classPass: string = 'form-control';
  classCp: string = 'form-control';
  classDate: string = 'form-control';

  classMailLogin:string = 'form-control';
  classPassLogin:string = 'form-control';

  mail: string;
  password: string;

  messageLogin:string = "";

  constructor(private auth: AuthentificationService, private route: Router) {}

  ngOnInit(): void {
    this.client = new Client();
    this.init();
  }

  init() {
    if (this.liste == undefined) {
      this.liste = new Array<any>();
      this.auth.findAll().subscribe((res) => (this.liste = res));
      console.log(this.liste);
    }
  }

  getIsConnect() {
    this.connectEmit.emit(this.isConnect);
  }

  verifyFields(): boolean {
    this.classNom = 'form-control';
    this.classPrenom = 'form-control';
    this.classMail = 'form-control';
    this.classPass = 'form-control';
    this.classCp = 'form-control';
    this.classDate = 'form-control';

    if (this.client.nom == '' || this.client.nom == null) {
      this.classNom = 'form-control bg-danger';
      return false;
    } else if (this.client.prenom == '' || this.client.prenom == null) {
      this.classPrenom = 'form-control bg-danger';
      return false;
    } else if (this.client.mail == '' || this.client.mail == null) {
      this.classMail = 'form-control bg-danger';
      return false;
    } else if (this.client.password == '' || this.client.password == null) {
      this.classPass = 'form-control bg-danger';
      return false;
    } else if (this.client.cp == '' || this.client.cp == null) {
      this.classCp = 'form-control bg-danger';
      return false;
    } else if (this.client.date == '' || this.client.date == null) {
      this.classDate = 'form-control bg-danger';
      return false;
    }

    return true;
  }

  verifyMail(): boolean {
    this.init();

    if (this.liste.length > 0) {
      for (let i = 0; i < this.liste.length; i++) {
        console.log(this.liste[i].mail, this.client.mail);

        if (
          this.liste[i].mail != null &&
          this.liste[i].mail.toString() == this.client.mail
        ) {
          console.log('ok');

          this.message = 'Mail deja utilisé';
          this.isDiseable = true;
          return false;
        } else if (validate(this.client.mail)) {
          this.message = '';
          this.isDiseable = false;
          return true;
        }
      }
    } else {
      console.log(validate(this.client.mail));
      if (validate(this.client.mail)) {
        this.message = 'Main non utilisé';
        this.isDiseable = false;
        return true;
      }
    }

    return false;
  }

  register() {
    if (this.verifyMail() && this.verifyFields()) {
      console.log(this.client);
      this.auth.createClient(this.client);
      // this.isConnect = true;
      // sessionStorage.setItem('isConnect', 'true');
      sessionStorage.setItem('client', JSON.stringify(this.client));

      this.route.navigate(['auth']).then(() => {
        window.location.reload();
      });
    }
  }

  login() {
    this.init();

    for (const iterator of this.liste) {
      console.log(iterator.mail, this.mail);
      console.log(iterator.pass, this.password);

      if (
        iterator.mail != null &&
        iterator.password != null &&
        iterator.mail == this.mail &&
        iterator.password == this.password
      ) {
        console.log('Connecter');

        let clientConnect = new Client();
        clientConnect.id = iterator.id;
        clientConnect.nom = iterator.nom;
        clientConnect.prenom = iterator.prenom;
        clientConnect.mail = iterator.mail;
        clientConnect.password = iterator.password;
        clientConnect.cp = iterator.cp;
        clientConnect.date = iterator.date;
        clientConnect.commande = iterator.commande;

        this.isConnect = true;
        sessionStorage.setItem('isConnect', 'true');
        sessionStorage.setItem('client', JSON.stringify(clientConnect));

        this.route.navigate(['nouveautes']).then(() => {
          window.location.reload();
        });
      } else {
        console.log('pas connecter');
        this.messageLogin = "mail ou mot de passe invalide"
      }
    }
  }
}
