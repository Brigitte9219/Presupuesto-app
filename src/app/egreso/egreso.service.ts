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

  eliminar(egreso: Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}
