import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios:Usuario[]=[];

  constructor(public UsuarioService:UsuarioService) { }

  ngOnInit() {
    this.UsuarioService.getUsers()
    .subscribe(users=>{
      console.log(users);
      this.usuarios=users;
    });
  }

}
