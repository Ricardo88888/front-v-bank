import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  cliente:Cliente={
	nombre:"",
	apellido_paterno:"",
	apellido_materno:"",
	dni:"",
	correo:"",
	celular:""
  }
  constructor(private clienteService:ClienteService) { 
    
  }

  registrar(){
    console.log(">>> registrar()")
    console.log(this.cliente)

    this.clienteService.registraCliente(this.cliente).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error =>{
        console.log(error);
      },
    );
    
  }
  ngOnInit(): void {
  }

}
