import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isImportant: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  switchImportant() {
    this.isImportant = !this.isImportant;
  }

  HorsePhoto: string = 'assets/chevalnain.jpg';
}
