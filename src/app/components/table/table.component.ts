import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  usuarios: any[] = [];

  @Input()
  titulo: string = "";

  @Output()
  enviarUsuario = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  editarUsuario(usuario: any) {
    this.enviarUsuario.emit(usuario);
  }
  

}
