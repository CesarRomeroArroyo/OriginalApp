import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/productoModelo';
import Swal from 'sweetalert2';
import { FirebaseService } from '../../servicios/firebase.service';
import { ActivatedRoute } from "@angular/router";
import { Distribuidor } from '../../modelos/distribuidorModelo';
import { Ingredientes } from 'src/app/modelos/productoIngredientesModelo';
import { InformacionNutricional } from '../../modelos/productoInfoNutricionalModelo';
import { Caracteristicas } from '../../modelos/productoCaracteristicasModelo';

@Component({
  selector: 'app-productos-core',
  templateUrl: './productos-core.component.html',
  styleUrls: ['./productos-core.component.scss']
})
export class ProductosCoreComponent implements OnInit {
  producto: Producto = new Producto();
  distribuidores: Distribuidor[];
  caracteristicas: Caracteristicas = new Caracteristicas();
  ingrediente: Ingredientes = new Ingredientes;
  ingredientes: Ingredientes[] = [];
  nutricion: InformacionNutricional = new InformacionNutricional();
  tabs: any[]= [{0: true, 1:false, 2: false}];
  constructor(private servicio: FirebaseService, private route: ActivatedRoute) { 
    this.producto = new Producto();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var editable = params.get("id");
      if(editable){
        this.servicio.obtener('producto').subscribe((data: Producto[]) => {
          this.producto = data.find((data) => {
            return data.id === editable;
          });
          this.ingredientes = this.producto.ingredientes;
          this.caracteristicas = this.producto.caracteristicas;
          this.nutricion = this.producto.infoNutricional;
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
      text: "Desea guardar este Producto?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      this.producto.ingredientes = this.ingredientes;
      this.producto.infoNutricional = this.nutricion;
      this.producto.caracteristicas = this.caracteristicas;
      if (result.value) {
        if(this.producto.id!=''){
          this.servicio.actualizarDatos('producto', this.producto, this.producto.id);
        } else {
          this.servicio.guardarDatos('producto', this.producto);
        }
      }
    });
  }

  agregarIngrediente(){
    if(this.ingrediente.clase!='' && this.ingrediente.nombre!='')
    {
      this.ingredientes.push(this.ingrediente);
      this.ingrediente = new Ingredientes();
    } else {
      Swal.fire(
        '',
        'Debe ingresar la informacion faltante',
        'error'
      )
    }
  }

  quitarIngrediente(id) {
    Swal.fire({
      title: '',
      text: "Esta seguro de eliminar el ingrediente?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      this.ingredientes = this.ingredientes.filter((data) =>{
        return data != id;
      });  
    });
    
  }

}
