import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compPrincipal/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './compPrincipal/footer/footer.component';
import { ProductoComponent } from './compPrincipal/producto/producto.component';
import { ListaProductosComponent } from './listaProductosComponent/lista-productos.component';
import { RouterModule, Route } from '@angular/router';
import { ListaProductosService } from './list-productos.service';
//import { AgregarProductoComponent } from './compPrincipal/agregarProducto/agregar-producto.component';
//import { InicioComponent } from './compPrincipal/inicio/inicio.component';
import { BotonLogInComponent } from './boton-log-in/boton-log-in.component';
//import { VentaComponent } from './venta/venta.component';
import { SidebarComponent } from './compPrincipal/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http'

/*const routes: Route[] = [
  {path: '', component: InicioComponent},
  {path: 'listaProductos', component: ListaProductosComponent},
  {path: 'agregarProducto', component: AgregarProductoComponent},
  {path: 'venta', component: VentaComponent},
];*/

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
    BotonLogInComponent,
    VentaComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    //RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ListaProductosService],
  bootstrap: [
    AppComponent,
    ListaProductosComponent
  ]
})
export class AppModule { }
