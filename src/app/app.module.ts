import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from './app.component';

// router
import { app_routing } from './app.router';


// Providers | Services
import { PeliculasService } from './services/peliculas.service';

// components and pipes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { InfoComponent } from './components/info/info.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    InfoComponent,
    SinfotoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    app_routing
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
