import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dannys-hat2',
  templateUrl: './dannys-hat2.component.html',
  styleUrls: ['./dannys-hat2.component.scss'],
})
export class DannysHat2Component  implements OnInit {

  @Input('hatBackgroundColor') hatBackgroundColor!: string

  constructor() { }

  ngOnInit() {}

}
