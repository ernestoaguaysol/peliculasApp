import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { SinfotoPipe } from '../../pipes/sinfoto.pipe';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {

  public pelicula: any;
  public regresarA: string = '';
  public busqueda:string = '';

  constructor(public _peliculasService: PeliculasService,
              public activatedRoute: ActivatedRoute) {

      this.activatedRoute.params
      .subscribe(parametros => {
        
        this.regresarA = parametros['pag'];
        
        if (parametros['busqueda']) {
          this.busqueda = parametros['busqueda'];
        }
        
        this._peliculasService.getPelicula(parametros['id'])
                    .subscribe( pelicula => {
                      console.log(pelicula);
                      return this.pelicula = pelicula});
      });
  }

  ngOnInit() {
  }

}
