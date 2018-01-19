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

  public pelicula: any = {};

  constructor(public _peliculasService: PeliculasService,
              public activatedRoute: ActivatedRoute) {
      this.activatedRoute.params
      .map( params => params['id'])
      .subscribe(id => {
        console.log(id);
        this._peliculasService.getPelicula(id).subscribe( peli => {
          console.log(peli);
          this.pelicula = peli;
        });
      });
  }

  ngOnInit() {
  }

}
