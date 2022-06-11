import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios = [
    {
      username: "usuario1",
      apellido: "gareca",
      nombre: "nicolas",
      alumno: false
    },
    {
      username: "usuario2",
      apellido: "martinez",
      nombre: "victor",
      alumno: true
    },
    {
      username: "usuario3",
      apellido: "gutierrez",
      nombre: "pablo",
      alumno: false
    },
    {
      username: "usuario4",
      apellido: "guzman",
      nombre: "diego",
      alumno: true
    },
    {
      username: "usuario5",
      apellido: "alvarez",
      nombre: "julian",
      alumno: false
    }
  ]

  seleccionados: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarLista($event: any) {
    this.seleccionados.push($event);
  }

}
