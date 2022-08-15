import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
offer: Offer=new Offer();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
      const id=localStorage.getItem("id");
      id && this.service.getOfferId(parseInt(id))
      .subscribe(data=>{
        this.offer=data;
      })

  }
  Actualizar(offer:Offer){
    this.service.updateOffer(offer)
    .subscribe(data=>{
      this.offer=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
