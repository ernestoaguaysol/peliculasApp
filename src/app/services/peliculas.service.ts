import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey: string = '03c663b68c388a2aa1e88e1953795ac3';
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp ) { }

  getActuales() {
    let fecha = new Date();
    let f_hoy = fecha.toISOString().substring(0, 10);
    let pasada = new Date(fecha.setDate(-15));
    let f_pasada = pasada.toISOString().substring(0, 10);
    console.log(f_hoy);
    console.log(f_pasada);
    
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.asc&primary_release_date.gte=${f_pasada}&primary_release_date.lte=${f_hoy}&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
      .map( res => res.json());
  }
  
  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => res.json());
  }

  buscarPelicula( texto:string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => res.json());
  }

}
