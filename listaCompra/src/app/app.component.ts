import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaCompra';

  productos: string[] = [];
  nuevoProducto: string = 'pan';


  addProducto() {
    this.productos.push(this.nuevoProducto);
  }

}
