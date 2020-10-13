import { Component, OnInit } from '@angular/core';
import { Inputs } from '../model/Inputs';
import {SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.css']
})
export class DisplayBookingComponent implements OnInit {
displaydetails: Inputs;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.displaydata();
    // this.cardDisplay();
  }
   displaydata() {
    this.displaydetails = this.shared.getmessage();
    console.log(this.displaydetails)
  }

}
