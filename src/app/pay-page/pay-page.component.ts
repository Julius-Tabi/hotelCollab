import { Component, OnInit } from '@angular/core';
import { banking } from 'src/app/BankingArrayList';
import bankingArray from 'src/app/bankingArray';
import { booking } from '../arrayList';
import bookingsArray from '../array';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css']
})
export class PayPageComponent implements OnInit {
  arr = [];
  
  cardForm: FormGroup;

  banked: boolean;
 
  
  constructor(private fb: FormBuilder, private router: Router, private sharedService: SharedService) {
    // console.log(bookingsArray)
  }

  ngOnInit(): void {
    this.editbanking();
    
  }
editbanking() {
    this.cardForm = this.fb.group({
      Bankname: ['', Validators.required],
      Accountholder: ['', Validators.required],
      Cardno: ['', [ Validators.required,Validators.minLength(16), Validators.maxLength(16)]],
      Cvvno:['', [ Validators.required,Validators.minLength(3), Validators.maxLength(3)]],
      CardExpDate: ['', Validators.required],
    })
}
  get f(){
    return this.cardForm.controls;
  }
  onSubmit() {
    this.banked = true;
    if (this.cardForm.valid) {
    
      this.sharedService.setcard(this.cardForm.value);
      this.router.navigate(['/display-booking']);
  }
  }
   disableDat() {
    var today = new Date();
    // document.getElementsByName("txtDat")[0].setAttribute('min', today);
    // console.log(today);
  }
}
