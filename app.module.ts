import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compPrincipal/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './compPrincipal/footer/footer.component';
import { ProductoComponent } from './compPrincipal/producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RouterModule, Route } from '@angular/router';

import { ListaProductosService } from './list-productos.service';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { InicioComponent } from './compPrincipal/inicio/inicio.component';


const routes: Route[] = [
  {path: '', component: InicioComponent},
  {path: 'listaProductos', component: ListaProductosComponent},
  {path: 'agregarProducto', component: AgregarProductoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductoComponent,
    ListaProductosComponent,
    AgregarProductoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListaProductosService],
  bootstrap: [
    AppComponent,
    ListaProductosComponent
  ]
})
export class AppModule { }
