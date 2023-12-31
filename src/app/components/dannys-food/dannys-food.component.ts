import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dannys-food',
  templateUrl: './dannys-food.component.html',
  styleUrls: ['./dannys-food.component.scss'],
})
export class DannysFoodComponent implements OnInit {

  @Output() done: EventEmitter<any> = new EventEmitter();

  showDannysFoodHave = false;
  eatenFoodsCount = 0;
  isHappyDanny = false;

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
  foodOffsetX = 0;
  foodOffsetY = 0;
  isEatingMode = false;

  constructor( ) { }

  ngOnInit() {
    this.setShowDannysFoodHave();
    new Audio("../../../assets/sounds/descriptions/dannys-food.aac").play();
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

  foodTouch(event: TouchEvent, elementId: string) {
    const foodEl = document.getElementById(elementId)!;
    const foodRect = foodEl.getBoundingClientRect()
    let foodInitialX = 0;
    let foodInitialY = 0;


    if (event.type === 'touchstart') {
      foodInitialX = foodRect.x;
      foodInitialY = foodRect.y;

      this.foodOffsetX = event.targetTouches[0].clientX
      this.foodOffsetY = event.targetTouches[0].clientY


    } else if (event.type === 'touchmove') {
      const newX = event.targetTouches[0].clientX - this.foodOffsetX
      const newY = event.targetTouches[0].clientY - this.foodOffsetY
      foodEl.style.transform = `translate(${newX}px, ${newY}px)`

      const mouth = document.getElementById('mouth');
      const mouthTop = mouth!.getBoundingClientRect().top;
      const draggedFoodTop = foodEl.getBoundingClientRect().top

      if ((mouthTop - 50 < draggedFoodTop && draggedFoodTop < mouthTop + 50) && elementId === this.selectedFood.elementId) {
        this.isEatingMode = true;
      } else {
        this.isEatingMode = false;
      }

    } else if (event.type === 'touchend') {
      const mouth = document.getElementById('mouth');
      const mouthTop = mouth!.getBoundingClientRect().top;
      const draggedFoodTop = foodEl.getBoundingClientRect().top

      if ((mouthTop - 50 < draggedFoodTop && draggedFoodTop < mouthTop + 50) && elementId === this.selectedFood.elementId) {
        this.playSoundEffect('../../../assets/sounds/laugh/laugh5.mp3');
        this.isEatingMode = false;
        this.eatenFoodsCount += 1;
        this.changeSelectedFood();
      }
      foodEl.style.transform = `translate(${foodInitialX}px, ${foodInitialY}px)`
    }
  }

  playSoundEffect(soundAddress: string) {
    new Audio(soundAddress).play();
  }

  changeSelectedFood() {
    if (this.eatenFoodsCount >= 3) {
      this.isHappyDanny = true;
      this.done.emit();
    } else {
      this.selectedFood = this.choiceRandomFood();
      this.setShowDannysFoodHave();
      this.setShowDannysFoodHave();
    }
  }

  resetGame() {
    this.eatenFoodsCount = 0;
    this.selectedFood = this.choiceRandomFood();
    this.setShowDannysFoodHave();
    this.isHappyDanny = false;
  }
}
