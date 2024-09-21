import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona1-actividad1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad1.component.html',
  styleUrl: './actividad1.component.css'
})
export class Actividad1Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona1/actividades/actividad1/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona1/actividades/actividad1/fallo']);
  }
}
