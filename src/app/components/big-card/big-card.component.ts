import { Component, INJECTOR, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() photoBigCard: string = "";
  @Input() titleBigCard: string = "";
  @Input() textBigCard: string = "";
  @Input() id:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
