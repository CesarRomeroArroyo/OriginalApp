import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modelos/empresaModelo';
import { FirebaseService } from '../../servicios/firebase.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empresa-core',
  templateUrl: './empresa-core.component.html',
  styleUrls: ['./empresa-core.component.scss']
})
export class EmpresaCoreComponent implements OnInit {
  empresa: Empresa = {id:'', nombre:'', nit: '', direccion:'', telefono:'', email: '', web: '', ideRepresentante: '', representante:'', telefonoRepresentante:''};
  constructor(private servicio: FirebaseService) { 

  }

  ngOnInit() {
    this.servicio.obtener('empresa').subscribe((emp: Empresa[]) => {
      if(emp.length > 0){
        this.empresa = emp[0];
        console.log(this.empresa);
      }
    });
  }

  guardarEmpresa() {
    Swal.fire({
      title: '',
      text: "Desea agregar esta empresa?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        if(this.empresa.id!=''){
          this.servicio.actualizarDatos('empresa', this.empresa, this.empresa.id);
        } else {
          this.servicio.guardarDatos('empresa', this.empresa);
        }
      }
    })
    
  }

}
