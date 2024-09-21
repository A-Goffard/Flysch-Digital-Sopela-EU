import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad3.component.html',
  styleUrl: './actividad3.component.css'
})
export class Actividad3Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona3/actividades/actividad3/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona3/actividades/actividad3/fallo']);
  }
}

