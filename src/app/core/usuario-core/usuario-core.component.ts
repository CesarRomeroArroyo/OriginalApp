import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuarioModelo';
import Swal from 'sweetalert2';
import { FirebaseService } from '../../servicios/firebase.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-usuario-core',
  templateUrl: './usuario-core.component.html',
  styleUrls: ['./usuario-core.component.scss']
})
export class UsuarioCoreComponent implements OnInit {
  usuario: Usuario = {id: '', nombre:'', email: '', telefono:'', password:''};
  constructor(private servicio: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var editable = params.get("id");
      if(editable){
        this.servicio.obtener('usuariocore').subscribe((usuario: Usuario[]) => {
          this.usuario = usuario.find((data) => {
            return data.id === editable;
          });
        });
      }
    })
  }

  guardar() {
    Swal.fire({
      title: '',
      text: "Desea agregar este Usuario?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        if(this.usuario.id!=''){
          this.servicio.actualizarDatos('usuariocore', this.usuario, this.usuario.id);
        } else {
          this.servicio.guardarDatos('usuariocore', this.usuario);
        }
      }
    });
  }

}
