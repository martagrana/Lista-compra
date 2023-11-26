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
    this.cargarDesdeBD();
  }


  addProducto() {
    let p = new Producto(this.nombre, this.cantidad);
    this.productos.push(p);
    this.nombre = '';
    this.cantidad = 1;

    this.guardarEnBD();

    /*localStorage.setItem('ultimo-nombre-introducido', p.nombre);
    // Esto es un ejemplo de arrays con cadenas
    console.log(p.nombre);
    console.log(p.nombre[2]);
    for (let index = 0; index < p.nombre.length; index++) {
      const element = p.nombre[index];
      let esPar: boolean = index % 2 == 0;
      if (!esPar) { console.log(element); }

    }*/

  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
    this.guardarEnBD();
  }

  guardar() {
    this.guardarEnBD();
  }
  // estas funciones manejan la persistencia
  guardarEnBD() {
    let dbProductos = JSON.stringify(this.productos)
    sessionStorage.setItem('productos', dbProductos);
  }
  cargarDesdeBD() {
    let dbProductos: any = sessionStorage.getItem('productos');
    if (dbProductos !== null) {
      this.productos = JSON.parse(dbProductos);
      console.log(dbProductos);
    }
  }

}
