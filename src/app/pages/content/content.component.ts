import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.setValuesToComponent(value.get("id"));
    })
  }

  setValuesToComponent(id: string | null): void {
    console.log(data);
    const result = data.filter(article => article.id == id)[0]

    this.contentCover = result.contentCover;
    this.contentDescription = result.contentDescription;
    this.contentTitle = result.contentTitle;

  }

}
