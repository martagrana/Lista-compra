import { Component } from '@angular/core';

class Producto {
  nombre: string = '';
  seleccionado: boolean = false;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaCompra';

  productos: Producto[] = [];
  nuevoProducto: Producto = { nombre: '', seleccionado: false };



  addProducto() {
    this.productos.push(this.nuevoProducto);
    this.nuevoProducto = { nombre: '', seleccionado: false };
  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
  }




}
