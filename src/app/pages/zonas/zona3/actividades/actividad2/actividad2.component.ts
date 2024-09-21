import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad2.component.html',
  styleUrl: './actividad2.component.css'
})
export class Actividad2Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona3/actividades/actividad2/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona3/actividades/actividad2/fallo']);
  }
}
