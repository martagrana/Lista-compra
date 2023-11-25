import { Component } from '@angular/core';

class Producto {
  nombre: string = '';
  seleccionado: boolean = false;
  cantidad: number = 1;
  mayor: boolean = false;

  constructor(nombre: string, cantidad: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.mayor = this.cantidad >= 3;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaCompra';

  productos: Producto[] = [];

  nombre: string = '';
  cantidad: number = 1;


  addProducto() {
    let p = new Producto(this.nombre, this.cantidad);
    this.productos.push(p);
    this.nombre = '';
    this.cantidad = 1;
  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
  }




}
