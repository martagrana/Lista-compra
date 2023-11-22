import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaCompra';

  productos: string[] = [];
  nuevoProducto: string = '';

  checkboxEstado: boolean = false;

  addProducto() {
    this.productos.push(this.nuevoProducto);
    this.nuevoProducto = '';
  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
  }

}
