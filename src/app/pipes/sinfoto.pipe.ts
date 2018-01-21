import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(pelicula: any): any {
    const noimage = 'assets/img/noimage.png';
    const urlImage = 'http://image.tmdb.org/t/p/w300';

    if (pelicula.backdrop_path) {
      return `${urlImage}${pelicula.backdrop_path}`;
    }else {
      if (pelicula.poster_path) {
        return `${urlImage}${pelicula.poster_path}`;
      }
    }

    return noimage;
  }

}
