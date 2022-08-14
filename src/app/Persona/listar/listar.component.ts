import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  offers:Offer[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getOffers()
    .subscribe(data=>{
      this.offers=data
    })
  }
  Editar(persona:Offer):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }
Offerte(persona:Offer){
    this.service.deleteOffer(persona)
    .subscribe(data=>{
      this.offers=this.offers.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }
}
