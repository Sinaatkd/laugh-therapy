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
  isCharacterHappy = false;

  ngOnInit() {
    setInterval(() => {
      if (!this.isCharacterHappy) {
        this.runPupilAnimation = !this.runPupilAnimation;
        this.rnuBodyAnimation = !this.rnuBodyAnimation;
      } else {
        this.runPupilAnimation = false;
        this.rnuBodyAnimation = false;
      }
    }, 5000)
  }
}
