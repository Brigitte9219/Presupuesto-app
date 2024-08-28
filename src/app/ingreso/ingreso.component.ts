import { Component, OnInit } from '@angular/core';
import { IngresoService } from './ingreso.service';
import { Ingreso } from './ingreso';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent implements OnInit{

  ingresos: Ingreso[]=[];

  constructor(private ingresoService: IngresoService){
  }
  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresoService.eliminar(ingreso);
  }


}
