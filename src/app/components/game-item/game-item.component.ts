import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss'],
})
export class GameItemComponent  implements OnInit {

  @Input('title') title?: string;
  @Input('description') description?: string;
  @Input('imageAddress') imageAddress?: string;
  @Input('gamePageAddress') gamePageAddress?: string;
  
  constructor() { }

  ngOnInit() {}

}
