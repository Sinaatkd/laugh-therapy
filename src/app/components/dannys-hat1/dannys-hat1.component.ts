import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dannys-hat1',
  templateUrl: './dannys-hat1.component.html',
  styleUrls: ['./dannys-hat1.component.scss'],
})
export class DannysHat1Component  implements OnInit {

  @Input('hatBackgroundColor') hatBackgroundColor!: string;
 
  constructor() { }

  ngOnInit() {}

}
