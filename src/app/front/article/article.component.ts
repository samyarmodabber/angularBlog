import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id:number=parseInt(params.get('id'))
      console.log(id+1);
      
      fetch(`https://jsonplaceholder.typicode.com/posts/${id+1}`)
        .then(res => res.json())
        .then(json => {
          this.article = json;
          
        });
      });
      // console.log(this.article);
  }
}
