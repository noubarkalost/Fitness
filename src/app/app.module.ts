import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {CustomPreloadingStrategy} from './preloading-strategy'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule

  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
