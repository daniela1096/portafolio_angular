import { Component, OnInit } from '@angular/core';
//import { InfoPagina } from '../../interfaces/info-pagina.interfaces';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
    private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(termino: String) {

    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);
  }

}
