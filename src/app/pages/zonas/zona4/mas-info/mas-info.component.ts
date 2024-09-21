import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona4-mas-info',
  standalone: true,
  imports: [],
  templateUrl: './mas-info.component.html',
  styleUrl: './mas-info.component.css'
})
export class MasInfoComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zonas']);
  }
}
