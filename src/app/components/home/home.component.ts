import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public peliculasActuales: any;
  public peliculasPopupares: any;
  public peliculasChicos: any;

  constructor( public _peliculasService: PeliculasService) {
    this._peliculasService.getActuales()
            .subscribe(data => this.peliculasActuales = data);


    this._peliculasService.getPopulares()
            .subscribe(data => this.peliculasPopupares = data);


    this._peliculasService.getPopularesChicos()
            .subscribe(data => this.peliculasChicos = data);
   }

  ngOnInit() {
  }

}
