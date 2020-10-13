import { Injectable } from '@angular/core';
import { Inputs } from '../model/Inputs';
import { from } from 'rxjs';
import { Cardinput } from '../model/Cardinput';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: Inputs;
  cardmessage: Cardinput;
  constructor() { }
  setMessage(data) {
    this.message = data;
    console.log(this.message);
  
  }
  getmessage() {
    return this.message;
  }
  setcard(data) { this.cardmessage = data; }
  
  getcardDetails() {
    return this.cardmessage;
  }
}
