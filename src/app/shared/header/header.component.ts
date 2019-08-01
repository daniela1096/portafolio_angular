import { Component, OnInit } from '@angular/core';
//import { InfoPagina } from '../../interfaces/info-pagina.interfaces';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio : InfoPaginaService) { }

  ngOnInit() {
  }

}