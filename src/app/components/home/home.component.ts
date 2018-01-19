import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public peliculasPopupares: any[] = [];
  public peliculasActuales: any[] = [];
  public peliculasChicos: any[] = [];

  constructor( public _peliculasService: PeliculasService) {
    this._peliculasService.getPopulares()
    .subscribe((data: any) => {
      this.peliculasPopupares = data.results;
      console.log(this.peliculasPopupares);
    });

    this._peliculasService.getActuales()
      .subscribe((data: any) => {
        this.peliculasActuales = data.results;
        console.log(this.peliculasActuales);
      });

    this._peliculasService.getPopularesChicos()
      .subscribe((data: any) => {
        this.peliculasChicos = data.results;
        console.log(this.peliculasChicos);
      });
   }

  ngOnInit() {
  }

}
