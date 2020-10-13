import { Component, OnInit } from '@angular/core';
import { Inputs } from '../model/Inputs';
import {Cardinput} from '../model/Cardinput'
import {SharedService } from 'src/app/shared/shared.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.css']
})
export class DisplayBookingComponent implements OnInit {
displaydetails: Inputs;
cardData: Cardinput;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.displaydata();
    this.cardDisplay();
  }
   displaydata() {
    this.displaydetails = this.shared.getmessage();
    console.log(this.displaydetails)
  }
  cardDisplay() {
    this.cardData = this.shared.getcardDetails();
     console.log(this.cardData)
  }
}
