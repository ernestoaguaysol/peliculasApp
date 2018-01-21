import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey: string = '03c663b68c388a2aa1e88e1953795ac3';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  public peliculas: any[] = [];

  constructor( private jsonp: Jsonp ) { }

  getActuales() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdeStr = desde.toISOString().substring(0, 10);
    let hastaStr = hasta.toISOString().substring(0, 10);

    let url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.asc&primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
      .map( res => res.json().results);
  }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .map( res => res.json().results);
  }

  getPopularesChicos() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
        return this.jsonp.get( url )
                    .map( res => res.json().results);
  }

  getPelicula(id: string) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
                .map( res => res.json());
  }

  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => {
                  this.peliculas = res.json().results;
                  return res.json().results;
                });
  }

}
