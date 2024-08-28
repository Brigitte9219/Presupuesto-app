import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso';
import { Egreso } from './egreso/egreso';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso[]=[];
  egresos: Egreso[]=[];

  constructor(private ingresoService: IngresoService, private EgresoService: EgresoService){
    this.ingresos = ingresoService.ingresos;
    this.egresos = EgresoService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
      console.log('Ingreso total: '+ingresoTotal);
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
      console.log('Egreso total: '+egresoTotal);
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }
  
  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
