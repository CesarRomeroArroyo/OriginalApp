import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'usuario',
    component: UsuarioComponent
  },
  {
    path:'producto',
    component: ProductoComponent
  },
  {
    path:'productoCore',
    component: ListaProductosCoreComponent
  },
  {
    path:'newProductoCore',
    component: ProductosCoreComponent
  },
  {
    path:'editProductoCore/:id',
    component: ProductosCoreComponent
  },
  {
    path:'usuarioCore',
    component: ListaUsuariosCoreComponent
  },
  {
    path:'newUsuarioCore',
    component: UsuarioCoreComponent
  },
  {
    path:'editUsuarioCore/:id',
    component: UsuarioCoreComponent
  },
  {
    path:'newEmpresaCore',
    component: EmpresaCoreComponent
  },
  {
    path:'distribuidorCore',
    component: ListaDistribuidorCoreComponent
  },
  {
    path:'newDistribuidorCore',
    component: DistribuidorCoreComponent
  },
  {
    path:'editdistribuidorCore/:id',
    component: DistribuidorCoreComponent
  },
  {
    path:'codigoQRCore',
    component: CodigosQRCoreComponent
  },
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
