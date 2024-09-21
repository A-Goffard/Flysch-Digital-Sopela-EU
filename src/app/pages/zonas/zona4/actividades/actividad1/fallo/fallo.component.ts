import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona4-actividad1-fallo1',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona4/actividades/actividad1']);
  }

  siguiente() {
    this.router.navigate(['/zona4']);
  }
}