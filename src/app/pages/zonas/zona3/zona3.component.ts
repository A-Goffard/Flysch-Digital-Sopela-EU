import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/shared-header/shared-header.component';
import { MarcadoresComponent } from './componentes/marcadores/marcadores.component';
@Component({
  selector: 'app-zona3',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent, MarcadoresComponent],
  templateUrl: './zona3.component.html',
  styleUrl: './zona3.component.css'
})
export class Zona3Component {

}