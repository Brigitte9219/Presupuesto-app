import { Injectable } from '@angular/core';
import { Egreso } from './egreso';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  egresos: Egreso[] = [
    {descripcion:'Renta departamento', valor:900},
    {descripcion:'Ropa', valor:200},
  ];

  constructor() { }
}
