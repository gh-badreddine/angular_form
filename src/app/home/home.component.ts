import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import {DataService} from "../data.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  profile;
  success = false;
  constructor(private fb: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.data.currentProfile.subscribe(profile => this.profile = profile)
    this.myForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [
        Validators.required,
        Validators.email
      ]],
      address:['', Validators.required],
      phone:'',
      country:'',
      state:'',
      zip:'',
      about:'',
      experiences: this.fb.array([])
    })
  }
  // validation

get firstName(){
  return this.myForm.get('firstName')
}
get lastName(){
  return this.myForm.get('lastName')
}
get email(){
  return this.myForm.get('email')
}
get address(){
  return this.myForm.get('address')
}




  get experienceForms(){
    return this.myForm.get('experiences') as FormArray
  }

  // add exp
  addExp(){
    const experience = this.fb.group({
      position: [],
      company: []
    })
    this.experienceForms.push(experience)
  }
  // delete exp
  deleteExp(i){
    this.experienceForms.removeAt(i)
  }

  // submit form
  async submitHandler(){
    const formValue = this.myForm.value;
    try{
      await this.data.changeMessage(formValue);
      this.success = true;
    }catch(err){
      console.error(err)
    }
    this.data.changeMessage(formValue)
  }

}
