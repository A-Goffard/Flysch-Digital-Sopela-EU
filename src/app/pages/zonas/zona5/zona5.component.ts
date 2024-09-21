import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/shared-header/shared-header.component';
import { MarcadoresComponent } from "./componentes/marcadores/marcadores.component";

@Component({
  selector: 'app-zona5',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent, MarcadoresComponent],
  templateUrl: './zona5.component.html',
  styleUrl: './zona5.component.css'
})
export class Zona5Component {

}
