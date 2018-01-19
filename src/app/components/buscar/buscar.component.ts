import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  public termino: string;
  public peliculas: any[] = [];

  constructor( public _peliculasService: PeliculasService) { }

  ngOnInit() {

  }

  buscarPelicula() {
    console.log(this.termino);
    if (this.termino.length === 0) {
      return;
    }
    this._peliculasService.buscarPelicula(this.termino)
            .subscribe((data: any) => {
              console.log(data);
              this.peliculas = data.results;
            });
  }

}
