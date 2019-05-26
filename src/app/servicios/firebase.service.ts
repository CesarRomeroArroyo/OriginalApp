import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {}

  obtenerDatosLogin(usuario: string, password: string): Observable<any> {
    this.itemsCollection = this.db.collection<any>('usuarios', ref => ref.where('email', '==', usuario)
                                                                      .where('password', '==', password));
    return this.itemsCollection.snapshotChanges().pipe(
      map( data => {
        return data.map( d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtener(tabla): Observable<any> {
    this.itemsCollection = this.db.collection(tabla);
    return this.itemsCollection.snapshotChanges().pipe(
      map( data => {
        return data.map( d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerId(tabla, id): Observable<any> {
    this.itemsCollection = this.db.collection(tabla, ref => ref.where('id', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map( data => {
        return data.map( d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }


  guardarDatos(tabla: string, data)  {
    this.itemsCollection = this.db.collection<any>(tabla);
    this.itemsCollection.add(data).then(
      () => {
        Swal.fire(
          '',
          'Datos guardados correctamente',
          'success'
        )
      }
    ).catch(() => {
      Swal.fire(
        '',
        'Ocurrio un problema al guardar los datos',
        'error'
      )
    });
  }

  actualizarDatos (tabla, data, id) {
    this.itemsCollection = this.db.collection<any>(tabla);
    this.itemsCollection.doc(id).update(data).then(
      () => {
        Swal.fire(
          '',
          'Datos actualizados correctamente',
          'success'
        )
      }
    ).catch(() => {
      Swal.fire(
        '',
        'Ocurrio un problema al actulizar los datos',
        'error'
      )
    });
  }

  eliminarDatos(tabla: string, id: any) {
    this.itemsCollection = this.db.collection<any>(tabla);
    this.itemsCollection.doc(id).delete().then(
      () => {
        Swal.fire(
          '',
          'Datos eliminados correctamente',
          'success'
        )
      }
    ).catch(() => {
      Swal.fire(
        '',
        'Ocurrio un problema al eliminar los datos',
        'error'
      )
    });
  }
}
