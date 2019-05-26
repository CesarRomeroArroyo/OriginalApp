import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Distribuidor } from '../../modelos/distribuidorModelo';

@Component({
  selector: 'app-distribuidor-core',
  templateUrl: './distribuidor-core.component.html',
  styleUrls: ['./distribuidor-core.component.scss']
})
export class DistribuidorCoreComponent implements OnInit {
  distribuidor: Distribuidor = {id:'', codigo:'', nombre:'', direccion:'', telefono:''};
  constructor(private servicio: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var editable = params.get("id");
      if(editable){
        this.servicio.obtener('distribuidor').subscribe((usuario: Distribuidor[]) => {
          this.distribuidor = usuario.find((data) => {
            return data.id === editable;
          });
        });
      }
    })
  }

  guardar() {
    Swal.fire({
      title: '',
      text: "Desea agregar este Distribuidor?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        if(this.distribuidor.id!=''){
          this.servicio.actualizarDatos('distribuidor', this.distribuidor, this.distribuidor.id);
        } else {
          this.servicio.guardarDatos('distribuidor', this.distribuidor);
        }
      }
    });
  }

}
