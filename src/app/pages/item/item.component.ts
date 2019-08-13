import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-completo.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
    public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros => {
      this.productosService.getProducto(parametros['id'])
        //console.log(parametros['id']);
          .subscribe( (producto: productoDescripcion) => {
            this.id = parametros['id'];
            this.producto = producto;
            //console.log(producto);
          });

      });


  }

}
