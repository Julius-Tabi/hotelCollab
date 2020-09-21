import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedService } from 'src/app/shared/shared.service';

import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
editForm: FormGroup
 CheckOutdate;
  booked: boolean;
  msg: string;
  CheckIndate;
  phonenumber: string;

  constructor(private fb: FormBuilder, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.editBookingForm();
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
 editBookingForm() {
    this.editForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      IdNUm: ['', Validators.required],
      phonenumber: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      NoofRooms: ['', Validators.required],
      roomType: ['', Validators.required],
      CheckIndate: ['', Validators.required],
      CheckOutdate: ['', Validators.required]
      
    })
 }
   get f(){
     return this.editForm.controls;
     
  }
  onSubmit() {
    this.booked = true;
    if (this.editForm.valid) {
    
      this.sharedService.setMessage(this.editForm.value);
      if (this.CheckIndate > this.CheckOutdate || this.CheckOutdate < this.CheckIndate) {
        this.msg = "error";
        console.log(this.msg);
      } else {
       
        // this.router.navigate(['/banking-details']);
      }
    
    }
    
  }
    disableData() {
  
    var today = new Date().toISOString().split('T')[0]; 
    document.getElementsByName("CheckIndate")[0].setAttribute('min', today); 
    // console.log(today);
  
  }
  disableDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("CheckOutdate")[0].setAttribute('min', today);
    console.log(today);
  }
  
 

}
