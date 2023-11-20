import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganados',
  templateUrl: './ganados.page.html',
  styleUrls: ['./ganados.page.scss'],
})
export class GanadosPage implements OnInit {
  mostrarPuntosGanados = true;

  cambiarTabla() {
    this.mostrarPuntosGanados = !this.mostrarPuntosGanados;
  }
  datosPuntosGanados = [
    { columna1: '+500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
    { columna1: '+500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
    { columna1: '+500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
    { columna1: '+500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
  ];
  
  datosPuntosGastados = [
    { columna1: '-500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
    { columna1: '-500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
    { columna1: '-500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
    { columna1: '-500', columna2: 'Cardio Blast', columna3: '2023-09-13' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
