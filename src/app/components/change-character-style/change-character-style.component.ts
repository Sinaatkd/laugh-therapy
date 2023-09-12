import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-character-style',
  templateUrl: './change-character-style.component.html',
  styleUrls: ['./change-character-style.component.scss'],
})
export class ChangeCharacterStyleComponent implements OnInit {

  constructor() { }

  laughSoundAddress = '../../../assets/sounds/laugh/laugh5.mp3';


  colors = ['#963', '#aa8866', '#debe99', '#241c11', '#4f1a00', '#9a3300', '#FF5733', '#FF0000', '#0017FF'];
  selectedHairColor = '#963';
  isSelectColorTurn = false;

  isDraggingHair1 = false;
  isHair1Selected = false;
  hair1OffsetX = 0;
  hair1OffsetY = 0;

  isDraggingHat1 = false;
  isHat1Selected = false;
  hat1OffsetX = 0;
  hat1OffsetY = 0;

  isDraggingHat2 = false;
  isHat2Selected = false;
  hat2OffsetX = 0;
  hat2OffsetY = 0;

  ngOnInit() {
  }

  ionViewDidLeave() {
    document.dir = 'rtl';
  }

  hair1Touch(event: TouchEvent) {
    const hair1El = document.getElementById('hair1')!;
    const hair1Rect = hair1El.getBoundingClientRect()
    let hair1InitialX = 0;
    let hair1InitialY = 0;

    if (event.type === 'touchstart') {
      hair1InitialX = hair1Rect.x;
      hair1InitialY = hair1Rect.y;
      this.isDraggingHair1 = true;

      this.hair1OffsetX = event.targetTouches[0].clientX
      this.hair1OffsetY = event.targetTouches[0].clientY


    } else if (event.type === 'touchmove') {
      if (!this.isDraggingHair1) return;
      const newX = event.targetTouches[0].clientX - this.hair1OffsetX
      const newY = event.targetTouches[0].clientY - this.hair1OffsetY
      hair1El.style.transform = `translate(${newX}px, ${newY}px)`

    } else if (event.type === 'touchend') {
      const face = document.getElementById('face');
      const faceTop = face!.getBoundingClientRect().top;
      const draggedHairTop = hair1El.getBoundingClientRect().top

      if (faceTop - 50 < draggedHairTop && draggedHairTop < faceTop + 50) {
        this.isHair1Selected = true;
        this.isHat1Selected = false;
        this.isHat2Selected = false;
        this.isSelectColorTurn = true;
        this.playSoundEffect(this.laughSoundAddress);
      }
      this.isDraggingHair1 = false;
      hair1El.style.transform = `translate(${hair1InitialX}px, ${hair1InitialY}px)`
    }
  }

  hat1Touch(event: TouchEvent) {
    const hat1El = document.getElementById('hat1')!;
    const hat1Rect = hat1El.getBoundingClientRect()
    let hat1InitialX = 0;
    let hat1InitialY = 0;

    if (event.type === 'touchstart') {
      hat1InitialX = hat1Rect.x;
      hat1InitialY = hat1Rect.y;
      this.isDraggingHat1 = true;

      this.hat1OffsetX = event.targetTouches[0].clientX
      this.hat1OffsetY = event.targetTouches[0].clientY


    } else if (event.type === 'touchmove') {
      if (!this.isDraggingHat1) return;
      const newX = event.targetTouches[0].clientX - this.hat1OffsetX
      const newY = event.targetTouches[0].clientY - this.hat1OffsetY
      hat1El.style.transform = `translate(${newX}px, ${newY}px)`

    } else if (event.type === 'touchend') {
      const face = document.getElementById('face');
      const faceTop = face!.getBoundingClientRect().top;
      const draggedHairTop = hat1El.getBoundingClientRect().top

      if (faceTop - 50 < draggedHairTop && draggedHairTop < faceTop + 50) {
        this.isHat1Selected = true;
        this.isHair1Selected = false;
        this.isHat2Selected = false;
        this.isSelectColorTurn = true;
        this.playSoundEffect(this.laughSoundAddress);
      }
      this.isDraggingHat1 = false;
      hat1El.style.transform = `translate(${hat1InitialX}px, ${hat1InitialY}px)`
    }
  }

  hat2Touch(event: TouchEvent) {
    const hat2El = document.getElementById('hat2')!;
    const hat2Rect = hat2El.getBoundingClientRect()
    let hat2InitialX = 0;
    let hat2InitialY = 0;

    if (event.type === 'touchstart') {
      hat2InitialX = hat2Rect.x;
      hat2InitialY = hat2Rect.y;
      this.isDraggingHat2 = true;

      this.hat2OffsetX = event.targetTouches[0].clientX
      this.hat2OffsetY = event.targetTouches[0].clientY


    } else if (event.type === 'touchmove') {
      if (!this.isDraggingHat2) return;
      const newX = event.targetTouches[0].clientX - this.hat2OffsetX
      const newY = event.targetTouches[0].clientY - this.hat2OffsetY
      hat2El.style.transform = `translate(${newX}px, ${newY}px)`

    } else if (event.type === 'touchend') {
      const face = document.getElementById('face');
      const faceTop = face!.getBoundingClientRect().top;
      const draggedHairTop = hat2El.getBoundingClientRect().top

      if (faceTop - 50 < draggedHairTop && draggedHairTop < faceTop + 50) {
        this.isHat1Selected = false;
        this.isHair1Selected = false;
        this.isHat2Selected = true;
        this.isSelectColorTurn = true;
        this.playSoundEffect(this.laughSoundAddress);
      }
      this.isDraggingHat2 = false;
      hat2El.style.transform = `translate(${hat2InitialX}px, ${hat2InitialY}px)`
    }
  }

  changeSelectColorTurn(value: boolean) {
    this.isSelectColorTurn = value;
  }

  changeHairColor(color: string) {
    this.selectedHairColor = color;
  }

  done() {

  }

  getHat1BackgroundImage() {
    return `repeating-linear-gradient(-60deg, var(--ion-color-white) 0px, var(--ion-color-white) 5px, var(--ion-color-white) 5px, ${this.selectedHairColor} 5px, ${this.selectedHairColor} 20px)`
  }

  playSoundEffect(audioAddress: string) {
    const audio = new Audio(audioAddress);
    audio.play();
  }
}
