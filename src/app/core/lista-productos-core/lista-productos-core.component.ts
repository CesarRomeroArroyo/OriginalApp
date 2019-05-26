import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/productoModelo';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-lista-productos-core',
  templateUrl: './lista-productos-core.component.html',
  styleUrls: ['./lista-productos-core.component.scss']
})
export class ListaProductosCoreComponent implements OnInit {
  productos: Producto[] = [];
  productosAll: Producto[] = [];

  buscarText: string;
  constructor(private servicio: FirebaseService) { }

  ngOnInit() {
    this.servicio.obtener('producto').subscribe((data: Producto[]) => {
      if(data.length > 0){
        this.productosAll = data;
        this.productos = this.productosAll;
      }
    });
  }

  buscar() {
    if(this.buscarText==''){
      this.productos = this.productosAll;
    }
    this.productos = this.productosAll.filter((data) => {
      return data.nombre.toLowerCase().indexOf(this.buscarText.toLowerCase())>=0;
    });
  }

}
