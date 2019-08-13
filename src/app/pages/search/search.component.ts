import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private router: ActivatedRoute,
               public productoService: ProductosService) { }

  ngOnInit() {

    this.router.params
    .subscribe( paramas => {
      console.log( paramas['termino'] );
      this.productoService.buscarProducto( paramas['termino']);
    })
  }

}
