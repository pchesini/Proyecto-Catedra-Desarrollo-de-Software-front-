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

  //Este método se ejecuta después de que Angular ha inicializado las propiedades vinculadas del componente. 
  ngOnInit(): void {
      this.productos = [
        {
          "codigo": 1234,
          "nombre": "remera",
          "descripcion": "remera marca Nike color azul",
          "imagenProducto": "img de remera"
        },
        {
          "codigo": 1235,
          "nombre": "zapatos",
          "descripcion": "zapatos marca NoSeMarcas color negro",
          "imagenProducto": "img de zapatos"
        }
      ];
  }

 /*
 Para pasarle los datos reales de la base de datos, deberiamos hacer lo siguiente:
 constructor(private listaProductosService: ListaProductosService) {}

 private obtenerEmpleados(){
  this.listaProductosService.obtenerListaProductos().subscribe(dato =>{
    this.productos = dato;
  });

  y en el ngOnInit() se oasaría this.obtenerProducto();
 }

 en la clase del productoController debe estar la anotacion @CrossOrigin(origins = "url del front") para que se comunique con el front
 */

  agregarProducto(): void {

    //this.listaProductosService.agregarProducto();
    this.router.navigate(['/agregarProducto']);
  }
    
  eliminarProducto(): void {
    
    //se usa el servicio para eliminar un producto por id
    this.listaProductosService.eliminarProducto(123);
    
  }
  
  
  
}

