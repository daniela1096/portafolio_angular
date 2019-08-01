import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Aqui se encuentra el servicio httpClient
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info: InfoPagina = {};
  //info: any = {};
  cargada = false; // me va a indicar cuando tenga cargada la información


  constructor(private http: HttpClient) { //con este servicio puedo realizar peticiones a cualquier servidor

    console.log('Info pagina cargada');

    //Leer el archivo json

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) =>{
      //console.log(resp)
      //console.log(resp['facebook']);
      this.cargada = true;
      this.info = resp;
      console.log(resp)
    });
  }
}
