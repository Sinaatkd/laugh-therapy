import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-dannys-style',
  templateUrl: './change-dannys-style.component.html',
  styleUrls: ['./change-dannys-style.component.scss'],
})
export class ChangeDannysStyleComponent implements OnInit {

  @Output() done: EventEmitter<any> = new EventEmitter();

  constructor() { }

  laughSoundAddress = '../../../assets/sounds/laugh/laugh5.mp3';


  colors = ['#963', '#aa8866', '#debe99', '#241c11', '#4f1a00', '#9a3300', '#FF5733', '#FF0000', '#0017FF'];
  selectedHairColor = '#963';
  isSelectColorTurn = false;

  items = [
    {
      image: '../../../assets/images/dannys-nurse/hair1.png',
      elementId: 'hair1',
    },
    {
      image: '../../../assets/images/dannys-nurse/hat1.png',
      elementId: 'hat1',
    },
    {
      image: '../../../assets/images/dannys-nurse/hat2.png',
      elementId: 'hat2',
    },
  ]

  isHair1Selected = false;
  selectedItem = '';
  itemOffsetX = 0;
  itemOffsetY = 0;


  ngOnInit() {
    new Audio('../../../assets/sounds/descriptions/change-dannys-style.aac').play();
  }

  ionViewDidLeave() {
    document.dir = 'rtl';
  }

  itemTouch(event: TouchEvent, elementId: string) {
    const hat2El = document.getElementById(elementId)!;
    const itemRect = hat2El.getBoundingClientRect()
    let itemInitialX = 0;
    let itemInitialY = 0;

    if (event.type === 'touchstart') {
      itemInitialX = itemRect.x;
      itemInitialY = itemRect.y;

      this.itemOffsetX = event.targetTouches[0].clientX
      this.itemOffsetY = event.targetTouches[0].clientY


    } else if (event.type === 'touchmove') {
      const newX = event.targetTouches[0].clientX - this.itemOffsetX
      const newY = event.targetTouches[0].clientY - this.itemOffsetY
      hat2El.style.transform = `translate(${newX}px, ${newY}px)`

    } else if (event.type === 'touchend') {
      const face = document.getElementById('face');
      const faceTop = face!.getBoundingClientRect().top;
      const draggedHairTop = hat2El.getBoundingClientRect().top

      if (faceTop - 50 < draggedHairTop && draggedHairTop < faceTop + 50) {
        this.isSelectColorTurn = true;
        this.selectedItem = elementId;
        this.playSoundEffect(this.laughSoundAddress);
      }
      hat2El.style.transform = `translate(${itemInitialX}px, ${itemInitialY}px)`
    }
  }

  changeSelectColorTurn(value: boolean) {
    this.isSelectColorTurn = value;
  }

  changeHairColor(color: string) {
    this.selectedHairColor = color;
  }

  getHat1BackgroundImage() {
    return `repeating-linear-gradient(-60deg, var(--ion-color-white) 0px, var(--ion-color-white) 5px, var(--ion-color-white) 5px, ${this.selectedHairColor} 5px, ${this.selectedHairColor} 20px)`
  }

  playSoundEffect(audioAddress: string) {
    const audio = new Audio(audioAddress);
    audio.play();
  }
}
