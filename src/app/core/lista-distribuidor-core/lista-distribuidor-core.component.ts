import { Component, OnInit } from '@angular/core';
import { Distribuidor } from '../../modelos/distribuidorModelo';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-lista-distribuidor-core',
  templateUrl: './lista-distribuidor-core.component.html',
  styleUrls: ['./lista-distribuidor-core.component.scss']
})
export class ListaDistribuidorCoreComponent implements OnInit {

  distribuidor: Distribuidor[] = [];
  distribuidorAll: Distribuidor[] = [];
  buscarText: string;
  constructor(private servicio: FirebaseService) { }

  ngOnInit() {
    this.servicio.obtener('distribuidor').subscribe((data: Distribuidor[]) => {
      if(data.length > 0){
        this.distribuidorAll = data;
        this.distribuidor = this.distribuidorAll;
      }
    });
  }

  buscar() {
    if(this.buscarText==''){
      this.distribuidor = this.distribuidorAll;
    }
    this.distribuidor = this.distribuidorAll.filter((data) => {
      return data.nombre.toLowerCase().indexOf(this.buscarText.toLowerCase())>=0;
    });
  }

}
