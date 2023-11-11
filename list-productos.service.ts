import { Injectable } from '@angular/core';
//import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { Producto } from './compPrincipal/interfaces/Producto';
//import { ProductoComponent } from './compPrincipal/producto/producto.component';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  private productos: Producto[] = [];

  constructor() { }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);  
  }


  eliminarProducto(codigo: string): ListaProductosService {
    // REemplazo la lista de productos por otro array resultante
    //del filtro que excluye la tarea por ID
    this.productos = this.productos.filter( producto => producto.codigo !== codigo );
    return this;
  }

  getProductos() {
    return this.productos;
  }

  obtenerProducto(codigo: string): Producto | undefined{
    // La función pop() retorna el producto resultante del filtro por id
    // En caso que no exista, retorna undefined
    return this.productos
        .filter(producto => producto.codigo === codigo)
        .pop();
  }

  modificarProducto(codigo: string, values: Object = {}): Producto | undefined{
    // Obtengo el producto por ID
    let producto = this.obtenerProducto(codigo);
    if (!producto){
      // No la encontré
      return undefined;
    }    
    // Actualizo la tarea con los valores recibidos en el parámetro
    Object.assign(producto, values);
    // Retorno la tarea
    return producto;
  }
  /*crearProducto(producto: Producto): ListaProductosService{
    //asignar el proximo id a la lista de productos
    producto.id = ++this.ultimoId;
    //agregar el producto al array
    this.productos.push(producto);
    //retorno el objeto con id actualizado
    return this;
  }*/
}
