import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from './compPrincipal/interfaces/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
productos: any;


  constructor(private modalService: NgbModal) {

  }
 
  public open(modal: any): void {
 
  this.modalService.open(modal);
 
  }
}
