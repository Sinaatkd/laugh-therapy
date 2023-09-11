import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-dannys-nurse',
  templateUrl: './dannys-nurse.page.html',
  styleUrls: ['./dannys-nurse.page.scss'],
})
export class DannysNursePage implements OnInit {
  constructor(
    @Inject(DOCUMENT) document: Document
  ) {
    document.dir = 'ltr';
  }

  colors = ['#963', '#aa8866', '#debe99', '#241c11', '#4f1a00', '#9a3300'];
  selectedHairColor = '#963';

  isDraggingHair1 = false;
  isHair1Selected = false;
  isSelectColorTurn = false;
  hair1OffsetX = 0;
  hair1OffsetY = 0;

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

      this.hair1OffsetX = event.targetTouches[0].clientX - hair1Rect.left
      this.hair1OffsetY = event.targetTouches[0].clientY - hair1Rect.top


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
        this.isSelectColorTurn = true;
      }
      this.isDraggingHair1 = false;
      hair1El.style.transform = `translate(${hair1InitialX}px, ${hair1InitialY}px)`
    }
  }

  changeSelectColorTurn(value: boolean) {
    this.isSelectColorTurn = value;
  }
  
  changeHairColor(color: string) {
    this.selectedHairColor = color;
  }
}
