import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  constructor(public UsuarioService:UsuarioService) { }

  ngOnInit() {
    this.UsuarioService.getUser()
    .subscribe(data=>{
      console.log(data);
    });
  }

}
