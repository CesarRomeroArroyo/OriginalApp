import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { ProductoService } from '../../servicios/producto.service';
import {Router} from "@angular/router";
declare var cordova;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  constructor(private service: FirebaseService, private router: Router, private productoService: ProductoService) { }

  ngOnInit() {
    
  }

  

  readQr(){
    ( < any > cordova).plugins.barcodeScanner.scan((result)=>{
      //alert(result.text);
      this.service.obtenerDatosQR(result.text).subscribe((data:any)=>{
        this.productoService.setProductos(data);
        this.router.navigate(['/producto']);
      });
    }, (error)=>{
      //alert(error);
    });
    
  }

  
}
