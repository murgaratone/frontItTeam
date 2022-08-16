import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Offer } from '../Modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='https://back-spring-it-team.herokuapp.com/offers';

  getOffers(){
    return this.http.get<Offer[]>(this.Url);
  }
  createOffer(offer:Offer){
    return this.http.post<Offer>(this.Url,offer);
  }
  getOfferId(id:number){
    return this.http.get<Offer>(this.Url+"/"+id);
  }
  updateOffer(offer:Offer){
    return this.http.put<Offer>(this.Url+"/"+offer.id,offer);
  }
  deleteOffer(offer:Offer){
    return this.http.delete<Offer>(this.Url+"/"+offer.id);
  }
}
