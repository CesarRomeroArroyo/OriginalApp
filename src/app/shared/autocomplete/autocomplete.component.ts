import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() maxletras: number;
  @Input() tabla: string;
  @Output() obtenerValor = new EventEmitter();
  valor: string = '';
  mostrar= true;
  resultados: any;
  constructor(private service: FirebaseService) { }

  ngOnInit() {
  }

  buscar(){
    this.mostrar= true;
    if(this.valor.length >= this.maxletras){
      this.service.obtener(this.tabla).subscribe((data: any)=>{        
        this.resultados = data.filter((registro)=>{
          return registro.nombre.toLowerCase().indexOf(this.valor.toLowerCase()) != -1;
        });
      });
    }
  }

  seleccionar(data: any){
    this.valor = data.nombre;
    this.mostrar= false;
    this.obtenerValor.emit(data);
  }

}
