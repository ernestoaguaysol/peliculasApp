import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagen: string): any {
    const noimage = 'assets/img/noimage.png';
    if (!imagen) {
      return noimage;
    }
    return (  imagen.length > 0) ? `http://image.tmdb.org/t/p/w600${imagen}` : noimage;
  }

}
