import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Aqui se encuentra el servicio httpClient
import { InfoPagina} from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // Llamo a las interfaces y las asigno a una variable
  info: InfoPagina = {};
  //equipo: EquipoPagina = {};
  cargada = false; // me va a indicar cuando tenga cargada la información
  //info: any = {};
  //equipo: InfoEquipo = {};
  equipo: any[] = [];


  constructor(private http: HttpClient) { //con este servicio puedo realizar peticiones a cualquier servidor
    //console.log('Info pagina cargada');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer el archivo json
    
    this.http.get('assets/data/data-pagina.json')
      .subscribe(( resp: InfoPagina) => {
        //console.log(resp)
        //console.log(resp['facebook']);
        this.cargada = true;
        this.info = resp;
        console.log(resp)
      });

  }


  private cargarEquipo() {
    //Leer el archivo json
    this.http.get('https://angular-html-d9ca1.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        //console.log(resp)
        //console.log(resp['facebook']);
        this.cargada = true;
        this.equipo = resp;
        console.log(resp)
      });


  }
}
