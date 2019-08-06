
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles=[];
  limit=10;

  constructor() {}
  
  ngOnInit() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`)
      .then(response => response.json())
      .then(json => (this.articles = json));

  }
}
