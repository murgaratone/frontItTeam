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
  error=false;
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
  Actualizar(){
    if(this.offer.description && this.offer.name && this.offer.price){
        this.error=false;
        this.service.createOffer(this.offer)
          .subscribe(data=>{
          this.offer.description="";
          this.offer.name="";
          this.offer.price=null;
          alert("Se actualizaron con exito los datos");
        this.router.navigate(["listar"]);
      })
    }
    else{
      this.error=true;
    }
  }
  resetError(){
    this.error=false
  }

}
