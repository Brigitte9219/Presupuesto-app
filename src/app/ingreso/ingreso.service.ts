import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingresos: Ingreso[] = [
    {descripcion:'Salario', valor:4000},
    {descripcion:'Venta Coche', valor:500},
  ];

constructor() { }

}
