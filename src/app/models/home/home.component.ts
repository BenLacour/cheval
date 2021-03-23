import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string = '';

  horses: string[] = ['Arabe', 'Appaloosa', 'Shire', 'Cheval ®'];

  isAdmin: boolean = true;

  minePicture: string = 'assets/grisou.jpg';

  constructor() {}

  ngOnInit(): void {}

  switchStateAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  horseSurprise() {
    alert('Retraite dorée à Ibiza');
  }
}
