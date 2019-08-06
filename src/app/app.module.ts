import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule as Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './front/articles/articles.component';
import { HeaderComponent } from './front/header/header.component';
import { SidebarComponent } from './front/sidebar/sidebar.component';
import { FooterComponent } from './front/footer/footer.component';
import { ArticleComponent } from './front/article/article.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { PageComponent } from './front/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ArticleComponent,
    NavbarComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    Router.forRoot([
      {
        path :'',
        component: ArticlesComponent
      },
      {
        path:'articles/:id',
        component: ArticleComponent
      },
      {
        path:'about',
        component: PageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
