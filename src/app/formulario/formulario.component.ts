import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso';
import { Egreso } from '../egreso/egreso';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  tipo: string ="ingresoOperacion";
  descripcionInput:string='';
  valorInput: number=0;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService){}

  tipoOperacion(evento: any){
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === "ingresoOperacion") {
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}
