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

  constructor() {
    console.log('estoy en el constructor del app.component');
    let x: any = localStorage.getItem('productos');
    this.productos = JSON.parse(x);
    console.log(x);
  }

  addProducto() {
    let p = new Producto(this.nombre, this.cantidad);
    this.productos.push(p);
    this.nombre = '';
    this.cantidad = 1;

    localStorage.setItem('productos', JSON.stringify(this.productos));
    localStorage.setItem('ultimo-nombre-introducido', p.nombre);
    console.log(p.nombre);
    console.log(p.nombre[2]);
    for (let index = 0; index < p.nombre.length; index++) {
      const element = p.nombre[index];
      let esPar: boolean = index % 2 == 0;
      if (!esPar) { console.log(element); }

    }

  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
  }




}
