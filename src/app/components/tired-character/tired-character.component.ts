import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tired-character',
  templateUrl: './tired-character.component.html',
  styleUrls: ['./tired-character.component.scss'],
})
export class TiredCharacterComponent implements OnInit {

  constructor() { }

  runPupilAnimation = false;
  rnuBodyAnimation = false;

  ngOnInit() {
    setInterval(() => {
      this.runPupilAnimation = !this.runPupilAnimation;
      this.rnuBodyAnimation = !this.rnuBodyAnimation;
    }, 5000)

  }
}
