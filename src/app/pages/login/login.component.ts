import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

botaoDesabilitado:boolean = true;
login:String = '';
senha:String = '';


validarFormulario(){
if(this.login.trim() !=='' && this.senha.trim() !== ''){
  this.botaoDesabilitado = false;
}else{
  this.botaoDesabilitado = true;
}

}
fazerLogin(){
  if(this.login=== "admin@email.com" && this.senha==="123"){
    alert("Bem-vindo(a) admin");
  }else{
    alert("Credenciais Inválidas!");
  }
}

  onBotaoClicado(){
    alert("Confirmado!");
  }

  teclaSolta(evento:KeyboardEvent):void{
    alert(`O usuário digitou ${evento.key}`);
  }

  
}
