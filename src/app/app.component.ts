import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.components';


@Component({
  selector: 'app-raiz',
  imports: [RouterOutlet, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miPrimeraApp';
  saludo= "Hola Lorena";
}
