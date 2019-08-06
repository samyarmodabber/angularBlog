import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  popularArticles
  
  constructor() { }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=5').then(res=>res.json()).then(json=>this.popularArticles=json)
  }

}
