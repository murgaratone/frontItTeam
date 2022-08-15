import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  error=false;
  offer:Offer = new Offer();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    if(this.offer.description && this.offer.name && this.offer.price){
        this.error=false;
        this.service.createOffer(this.offer)
          .subscribe(data=>{
          this.offer.description="";
          this.offer.name="";
          this.offer.price=null;
          alert("Se agrego una Nueva Oferta");
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
