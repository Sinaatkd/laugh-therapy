import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dannys-food',
  templateUrl: './dannys-food.component.html',
  styleUrls: ['./dannys-food.component.scss'],
})
export class DannysFoodComponent implements OnInit {

  showDannysFoodHave = false;

  foods = [
    {
      id: 1,
      title: 'میوه',
      image: '../../../assets/images/dannys-food/fruit.png',
      elementId: 'fruit',
    },
    {
      id: 2,
      title: 'آبمیوه',
      image: '../../../assets/images/dannys-food/juice.png',
      elementId: 'juice',
    },
    {
      id: 3,
      title: 'تخم مرغ',
      image: '../../../assets/images/dannys-food/fried-egg.png',
      elementId: 'fried-egg',
    },
    {
      id: 4,
      title: 'سوپ',
      image: '../../../assets/images/dannys-food/soup.png',
      elementId: 'soup',
    },
    {
      id: 5,
      title: 'فرنی',
      image: '../../../assets/images/dannys-food/porridge.png',
      elementId: 'porridge',
    },
    {
      id: 6,
      title: 'ماهی',
      image: '../../../assets/images/dannys-food/fried-fish.png',
      elementId: 'fried-fish',
    },
    {
      id: 7,
      title: 'شیر',
      image: '../../../assets/images/dannys-food/milk.png',
      elementId: 'milk',
    },
  ]

  selectedFood = this.choiceRandomFood();

  constructor() { }

  ngOnInit() {
    this.setShowDannysFoodHave();
  }

  choiceRandomFood(): any {
    const randomId = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    return this.foods.filter(food => food.id === randomId)[0]
  }

  setShowDannysFoodHave() {
    if (!this.showDannysFoodHave) {
      this.showDannysFoodHave = true
      setTimeout(() => {
        this.showDannysFoodHave = false;
      }, 5000);
    }
  }

}
