import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FirebaseService } from '../../servicios/firebase.service';
import { Guid } from "guid-typescript";
@Component({
  selector: 'app-codigos-qrcore',
  templateUrl: './codigos-qrcore.component.html',
  styleUrls: ['./codigos-qrcore.component.scss']
})
export class CodigosQRCoreComponent implements OnInit {
  productoSel: any;
  valor: number;
  qrs = [];
  constructor(private service: FirebaseService) { }

  ngOnInit() {
  }

  seleccionarProducto(data){
    console.log(data);
    this.productoSel = data;
  }

  agregarProducto(){
    for (let i = 0; i < this.valor; i++) {
      this.productoSel['idunico'] =  Guid.create().toString();
      this.productoSel['cantidad'] =  1;
      this.qrs.push({producto: this.productoSel});     
    }    
  }

  imprimir() {
    const printContent = document.getElementById("qrsComponent");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write('<html><head><title>Codigos</title>');
    WindowPrt.document.write('<style>.codigocore__codigosqr{display: inherit;');
    WindowPrt.document.write('float:left;');
    WindowPrt.document.write('height: 350px;');
    WindowPrt.document.write('width: 1000px;');
    WindowPrt.document.write('margin-top: 20px;');
    WindowPrt.document.write('background: white;');
    WindowPrt.document.write('overflow-x: hidden;');
    WindowPrt.document.write('overflow-y: scroll;   }    '); 
    WindowPrt.document.write('.codigocore__codigosqr__code{'); 
    WindowPrt.document.write('    margin: 20px;'); 
    WindowPrt.document.write('    width: 200px;'); 
    WindowPrt.document.write('    height: 200px;'); 
    WindowPrt.document.write('}</style>');
    WindowPrt.document.write('</head><body >');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.write('</body></html>');
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

  eliminarProducto(id){
    Swal.fire({
      title: '',
      text: "Esta seguro de eliminar el producto?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      this.qrs = this.qrs.filter((data) =>{
        return data != id;
      });  
    });
  }

  guardar(){
    Swal.fire({
      title: '',
      text: "Desea guardar estos codigos QR?",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7E2662',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      this.service.guardarDatos('qr', this.qrs);
    });
  }

}
