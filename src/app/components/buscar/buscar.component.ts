import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  public termino: string;
  public peliculas: any;

  constructor( public _peliculasService: PeliculasService,
                private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
            .subscribe(parametros => {
              console.log(parametros);
              if (parametros['texto']) {
                this.termino = parametros['texto'];
                this.buscarPelicula();
              }
            });
  }

  ngOnInit() {

  }

  buscarPelicula() {

    if (this.termino.length === 0) {
      return;
    }
    this._peliculasService.buscarPelicula(this.termino)
            .subscribe(data => this.peliculas = data);
  }

}
