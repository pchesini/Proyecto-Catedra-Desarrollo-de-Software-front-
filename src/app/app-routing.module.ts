import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { InicioComponent } from './compPrincipal/inicio/inicio.component';
import { ListaProductosComponent } from './listaProductosComponent/lista-productos.component';
import { AgregarProductoComponent } from './compPrincipal/agregarProducto/agregar-producto.component';
import { VentaComponent } from './venta/venta.component';


const routes: Routes = [
  {path:'./home/home/home.component', component: HomeComponent},
  {path: '', component: InicioComponent},
  {path: 'listaProductos', component: ListaProductosComponent},
  {path: 'agregarProducto', component: AgregarProductoComponent},
  {path: 'venta', component: VentaComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
