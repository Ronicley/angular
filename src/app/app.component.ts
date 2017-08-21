import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'display',
  templateUrl: 'display/display.component.html',
  styleUrls: ['display/display.component.css']
})

export class AppComponent {
  title = 'app';
  mostrar: string = "0";
  clicou1(){
    if (this.mostrar == "0"){
      this.mostrar = "1";
    }
    else{
      this.mostrar += "1";
    }

  } 
  clicou2(){
    if (this.mostrar == "0"){
      this.mostrar = "2";
    }
    else{
      this.mostrar += "2";
    }
    
  }
  clicou3(){
    if (this.mostrar == "0"){
      this.mostrar = "3";
    }
    else{
      this.mostrar += "3";
    }
    
  }
  clicou4(){
    if (this.mostrar == "0"){
      this.mostrar = "4";
    }
    else{
      this.mostrar += "4";
    }
  }
  clicou5(){
    if (this.mostrar == "0"){
      this.mostrar = "5";
    }
    else{
      this.mostrar += "5";
    }
  }
  clicou6(){
    if (this.mostrar == "0"){
      this.mostrar = "6";
    }
    else{
      this.mostrar += "6";
    }
  }
  clicou7(){
    if (this.mostrar == "0"){
      this.mostrar = "7";
    }
    else{
      this.mostrar += "6";
    }
  }
  clicou8(){
    if (this.mostrar == "0"){
      this.mostrar = "8";
    }
    else{
      this.mostrar += "8";
    }
  }
  clicou9(){
    if (this.mostrar == "0"){
      this.mostrar = "9";
    }
    else{
      this.mostrar += "9";
    }
  }
  clicou0(){
    if (this.mostrar == "0"){
      this.mostrar = "0";
    }
    else{
      this.mostrar += "0";
    }
  }
  clicouMais(){
    if (this.mostrar == "0"){
      this.mostrar =" + ";
    }
    else{
      this.mostrar += " + ";
    }
  }
  clicouMenos(){
    if (this.mostrar == "0"){
      this.mostrar = " - ";
    }
    else{
      this.mostrar += " - ";
    }
  }
  clicouVezes(){
    if (this.mostrar == "0"){
      this.mostrar = " * ";
    }
    else{
      this.mostrar += " * ";
    }
  }
  clicouDividir(){
    if (this.mostrar == "0"){
      this.mostrar = " / ";
    }
    else{
      this.mostrar += " / ";
    }
  }
  clicouIgual(){
    var resultado = this.mostrar.split(" ")
    if(resultado[1]=="+"){
      this.mostrar = (parseInt(resultado[0]) + parseInt(resultado[2]))+"";
     }
     else if(resultado[1]=="-"){
      this.mostrar = (parseInt(resultado[0]) - parseInt(resultado[2]))+"";
     }
     else if(resultado[1]=="/"){
      this.mostrar = (parseInt(resultado[0]) / parseInt(resultado[2]))+"";
     }
     else if(resultado[1] == "*"){
      this.mostrar = (parseInt(resultado[0]) * parseInt(resultado[2]))+"";
     }
  }
  clicouLimpar(){
    this.mostrar ="0";
  }
  ngOnInit() {
  }
}