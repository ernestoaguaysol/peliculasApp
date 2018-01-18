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
   }

  ngOnInit() {
  }

}
