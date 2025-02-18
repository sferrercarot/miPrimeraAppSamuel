import { Component,OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports:[FormsModule],
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>",
  styleUrl: './empleado.component.css'
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="juan";
  apellido="Diaz";
  edad=18;
  direccion="";
  empresa="";
  nacionalidad="Española";

  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

 /* getEdad(){
    return this.edad;
  }
    */
  /*llamaEmpresa(value:String){
    
  }*/
  habilitacionCuadro=false;

  usuResgistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuResgistrado=false;
  }

  setUsuarioRegistrado(event:Event){

    //alert("El usuario se acaba de registrar");
   // this.textoDeRegistro="El usuario se acaba de registrar"

    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar"
    }else{
      this.textoDeRegistro="No hay nadie registrado";

    }
  }

  constructor(){}

  ngOnInit(): void {
    
  }

}
