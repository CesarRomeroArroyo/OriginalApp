import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productoSubject = new BehaviorSubject({});

  constructor() { 

  }

  getProductos(): Observable<any> {
    return this.productoSubject.asObservable();
  }

  setProductos(producto: any) {
    this.productoSubject.next(producto);
  }

}
