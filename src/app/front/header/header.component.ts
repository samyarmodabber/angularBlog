import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteInfo={
    title:'IT Blog',
    description:'My articles about IT'

  }
  constructor() { }

  ngOnInit() {
  }

}
