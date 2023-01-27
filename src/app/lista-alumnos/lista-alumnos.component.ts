import { Component } from '@angular/core';
import { Estudiante } from '../datos/estudiantes';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  estudiantes: Estudiante[] = [
    {
      nombre: 'Federico',
      IDAlumno: 1,
      cursando: true,
      edad: 33,
    },
    {
      nombre: 'Soledad',
      IDAlumno: 2,
      cursando: true,
      edad: 33,
    },
    {
      nombre: 'Agustina',
      IDAlumno: 3,
      cursando: true,
      edad: 18,
    },
    {
      nombre: 'Cafesito',
      IDAlumno: 4,
      cursando: true,
      edad: 21,
    },
    {
      nombre: 'Tom',
      IDAlumno: 5,
      cursando: true,
      edad: 22,
    }
  ]
}
