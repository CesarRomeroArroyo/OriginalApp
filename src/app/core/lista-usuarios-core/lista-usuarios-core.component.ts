import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Usuario } from 'src/app/modelos/usuarioModelo';

@Component({
  selector: 'app-lista-usuarios-core',
  templateUrl: './lista-usuarios-core.component.html',
  styleUrls: ['./lista-usuarios-core.component.scss']
})
export class ListaUsuariosCoreComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuariosAll: Usuario[] = [];
  buscarText: string;
  constructor(private servicio: FirebaseService) { }

  ngOnInit() {
    this.servicio.obtener('usuariocore').subscribe((usuario: Usuario[]) => {
      if(usuario.length > 0){
        this.usuariosAll = usuario;
        this.usuarios = this.usuariosAll;
      }
    });
  }

  buscar() {
    if(this.buscarText==''){
      this.usuarios = this.usuariosAll;
    }
    this.usuarios = this.usuariosAll.filter((data) => {
      return data.nombre.toLowerCase().indexOf(this.buscarText.toLowerCase())>=0;
    });
  }

}
