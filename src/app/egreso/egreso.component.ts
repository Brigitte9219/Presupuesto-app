import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal: number=0;
  
  egresos: Egreso[] = [];

  constructor(private egresoService: EgresoService){}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarRegistro(egreso: Egreso){
    this.egresoService.eliminar(egreso);
  }

  porcentaje(egreso: Egreso){
    return egreso.valor /this.ingresoTotal;
  }

}
