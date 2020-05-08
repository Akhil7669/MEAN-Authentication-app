import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { ValidateService } from 'src/services/validate.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /**name: "String";
  username: "String";
  email: "String";
  password: "String" */

  
  constructor() { }

  ngOnInit(): void {  
  }

  submit(f){
    console.log(f);
  }

  
  /**onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };*/
    /**if (!this.validateService.validateRegister(user)) {
      console.log("please fill all fields ");
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      console.log("");
      return false;
    }
  }*/


}
