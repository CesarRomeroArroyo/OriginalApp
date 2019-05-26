import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/productoModelo';
import Swal from 'sweetalert2';
import { FirebaseService } from '../../servicios/firebase.service';
import { ActivatedRoute } from "@angular/router";
import { Distribuidor } from '../../modelos/distribuidorModelo';
@Component({
  selector: 'app-productos-core',
  templateUrl: './productos-core.component.html',
  styleUrls: ['./productos-core.component.scss']
})
export class ProductosCoreComponent implements OnInit {
  producto: Producto;
  distribuidores: Distribuidor[];
  tabs: any[]= [{0: true, 1:false, 2: false}];
  constructor(private servicio: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var editable = params.get("id");
      if(editable){
        this.servicio.obtener('producto').subscribe((data: Producto[]) => {
          this.producto = data.find((data) => {
            return data.id === editable;
          });
        });
      }
    });

    this.servicio.obtener('distribuidor').subscribe((data: Distribuidor[]) => {
      this.distribuidores = data;
    });
  }

  showTab( tab ){    
    this.tabs[0][0] = false;
    this.tabs[0][1] = false;
    this.tabs[0][2] = false;
    this.tabs[0][tab] = true;
  }

  guardar() {
    Swal.fire({
      title: '',
      text: "Desea agregar este Producto?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        if(this.producto.id!=''){
          this.servicio.actualizarDatos('producto', this.producto, this.producto.id);
        } else {
          this.servicio.guardarDatos('producto', this.producto);
        }
      }
    });
  }

}
