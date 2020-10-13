import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedService } from 'src/app/shared/shared.service';

import { Router } from '@angular/router';
import { from } from 'rxjs';
import { booking } from '../arrayList';
import bookingsArray from '../array';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
editForm: FormGroup
    firstname;
    lastname;
  IdNUm;
  email;
    phonenumber;
    
    roomType;
    CheckIndate;
    CheckOutdate;
   msg: string;
  booked: boolean;
  arr = [];
  constructor(private fb: FormBuilder, private router: Router, private sharedService: SharedService) {
  }
  listb(firstname, lastname,IdNUm,email, phonenumber, roomType, CheckIndate, CheckOutdate) {
   let book = new booking(firstname, lastname,IdNUm,email, phonenumber, roomType, CheckIndate, CheckOutdate)
    bookingsArray.push(book);
    console.log(bookingsArray);
  }

  ngOnInit(): void {
    this.editBookingForm();
  }
  
 editBookingForm() {
    this.editForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      IdNUm: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      
      roomType: ['', Validators.required],
      CheckIndate: ['', Validators.required],
      CheckOutdate: ['', Validators.required]
      
    })
 }
   get f(){
     return this.editForm.controls;
     
  }
  onSubmit() {
    console.log(this.editForm.value.firstname)
    let book = new booking(this.editForm.value.firstname, this.editForm.value.lastname, this.editForm.value.IdNUm,  this.editForm.value.email, this.editForm.value.phonenumber, this.editForm.value.roomType, this.editForm.value.CheckIndate, this.editForm.value.CheckOutdate)
    bookingsArray.push(book);
    console.log(bookingsArray);
    
    this.booked = true;
    if (this.editForm.valid) {
    
      this.sharedService.setMessage(this.editForm.value);
      if (this.CheckIndate > this.CheckOutdate || this.CheckOutdate < this.CheckIndate) {
        this.msg = "error";
        console.log(this.msg);
      } else {
       
        this.router.navigate(['/pay-page']);
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
