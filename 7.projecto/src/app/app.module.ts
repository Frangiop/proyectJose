import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from "@angular/common/http"; // no entiendo bien de donnde sale pero se hace manual 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    GestionComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // agrego este y lo copia "manualemnte " arriba 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
