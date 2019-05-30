import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { QRCodeModule } from 'angularx-qrcode';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosCoreComponent } from './core/productos-core/productos-core.component';
import { ListaProductosCoreComponent } from './core/lista-productos-core/lista-productos-core.component';
import { ListaUsuariosCoreComponent } from './core/lista-usuarios-core/lista-usuarios-core.component';
import { UsuarioCoreComponent } from './core/usuario-core/usuario-core.component';
import { EmpresaCoreComponent } from './core/empresa-core/empresa-core.component';
import { ListaDistribuidorCoreComponent } from './core/lista-distribuidor-core/lista-distribuidor-core.component';
import { DistribuidorCoreComponent } from './core/distribuidor-core/distribuidor-core.component';
import { CodigosQRCoreComponent } from './core/codigos-qrcore/codigos-qrcore.component';
import { AutocompleteComponent } from './shared/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuarioComponent,
    ProductoComponent,
    ProductosCoreComponent,
    ListaProductosCoreComponent,
    ListaUsuariosCoreComponent,
    UsuarioCoreComponent,
    EmpresaCoreComponent,
    ListaDistribuidorCoreComponent,
    DistribuidorCoreComponent,
    CodigosQRCoreComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
