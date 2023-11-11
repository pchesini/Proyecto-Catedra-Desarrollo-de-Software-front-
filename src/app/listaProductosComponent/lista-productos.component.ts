import { Component } from '@angular/core';
import { Producto } from '../compPrincipal/interfaces/Producto'
import { ListaProductosService } from '../list-productos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent{

 //lista donde se guardan los productos
  productos: Producto[] = [];

  constructor(private listaProductosService: ListaProductosService,  private router: Router){
    
  }
  agregarProducto(): void {
    //nuevo objeto del tipo Producto para agregar a la lista
    const nuevoProducto: Producto = {
      codigo: 12323,
      nombre: 'producto1',
      descripcion: 'descripcion de producto1',
      imagenProducto: 'imagenProducto1'
    }

    this.listaProductosService.agregarProducto(nuevoProducto);
    this.router.navigate(['/agregarProducto']);
  }
    
  eliminarProducto(): void {
    
    //se usa el servicio para eliminar un producto por id
    this.listaProductosService.eliminarProducto(123);
    
  }
  
  
  
}

