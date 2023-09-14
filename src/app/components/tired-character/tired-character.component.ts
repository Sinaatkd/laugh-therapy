import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { register } from 'swiper/element'

register();

@Component({
  selector: 'app-tired-character',
  templateUrl: './tired-character.component.html',
  styleUrls: ['./tired-character.component.scss'],
})
export class TiredCharacterComponent implements OnInit {

  @Output() done: EventEmitter<any> = new EventEmitter()

  constructor() { }

  animations = [
    {
      title: 'spongebob1',
      image: '../../../assets/images/spongebob.jpg',
      videoAddress: '../../../assets/video/spongebob1.mp4'
    },
    {
      title: 'mehmooni',
      image: '../../../assets/images/mehmooni.jpg',
      videoAddress: '../../../assets/video/mehmooni.mp4'
    },
    {
      title: 'spongebob2',
      image: '../../../assets/images/spongebob.jpg',
      videoAddress: '../../../assets/video/spongebob2.mp4'
    },
    {
      title: 'bossbaby',
      image: '../../../assets/images/bossbaby.jpg',
      videoAddress: '../../../assets/video/bossbaby.mp4'
    },
  ]

  showVideo!: string;


  runPupilAnimation = false;
  rnuBodyAnimation = false;
  isCharacterHappy = false;

  ngOnInit() {
    new Audio("../../../assets/sounds/descriptions/tired-character.aac").play();
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

  playAnimation(title: string) {
    this.isCharacterHappy = true;
    this.showVideo = title;
    new Audio("../../../assets/sounds/laugh/laugh3.mp3").play();
  }

  animationEnded() {
    new Audio("../../../assets/sounds/laugh/laugh3.mp3").play();
    this.done.emit();
  }
}
