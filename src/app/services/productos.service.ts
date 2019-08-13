import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-html-d9ca1.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          //console.log(resp);
          this.productos = resp;
          //setTimeout(() => {
          this.cargando = false;
          //}, 2000);
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-d9ca1.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      //CARGAR PRODUCTOS
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }



  }

  private filtrarProductos(termino: string) {
    //console.log(this.productos);
    this.productosFiltrado = []; // Limpio el array cada vez realice un abusqueda

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      //compara si lo insertado en el imput(termino) lo contiene en la categoria o en el titulo
      //if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.indexOf(termino) >= 0){ 
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){ 
        this.productosFiltrado.push(prod);
      }
    });
    
  }

}
