import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../modelos/clienteModelo';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  cliente: Clientes = {id:'0', codigo:'',  nombre:'', email:'', telefono:'' };
  constructor() { }

  ngOnInit() {
  }

  guardarCliente() {
    
  }

}
