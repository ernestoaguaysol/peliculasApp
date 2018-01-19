import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public termino: string;

  constructor() { }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.termino.length === 0) {
      return;
    }
    console.log(this.termino);
    
  }

}
