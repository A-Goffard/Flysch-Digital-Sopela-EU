import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/shared-header/shared-header.component';
import { MarcadoresComponent } from "./componentes/marcadores/marcadores.component";

@Component({
  selector: 'app-zona4',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent, MarcadoresComponent],
  templateUrl: './zona4.component.html',
  styleUrl: './zona4.component.css'
})
export class Zona4Component {

}
