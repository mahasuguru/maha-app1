import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { Http } from '@angular/http';

@Injectable()
export class ArticleService {
  constructor(private http:Http) {
  }

}

import { AppComponent }  from './app.component';
import { ArticleComponent }  from './article/article.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
