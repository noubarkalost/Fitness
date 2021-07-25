import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    NewsComponent,
    NewsHeaderComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
