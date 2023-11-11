import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-log-in',
  templateUrl: './boton-log-in.component.html',
  styleUrls: ['./boton-log-in.component.css']
})
export class BotonLogInComponent {
  isAuthenticated = false;

  toggleLogin() {
    // Aquí debes implementar la lógica de autenticación real
    // Cambia isAuthenticated según tu lógica de autenticación
    this.isAuthenticated = !this.isAuthenticated;
  }
}
