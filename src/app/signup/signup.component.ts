import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

// registration codes starts here
interface Software {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selectedValue: string;
  selectedSoftware: string;

  Softwares: Software[] = [
    { value: "", viewValue: "Select Designation" },
    { value: 'Software Trainee', viewValue: 'Software Trainee' },
    { value: 'Associate software Developer', viewValue: 'Associate software Developer' },
    { value: 'Software Developer', viewValue: 'Software Developer' }
  ];

  username = '';
  email = '';
  password = '';
  confirmpassword = '';
  selectedsoftware = '';


  constructor(private route: Router) { };
  ngOnInit(): void {

  }

  user: any = [];
  getValues() {
    debugger;
    if (localStorage.getItem('users') != null) {
      debugger;
      var usersArray: any[] = JSON.parse(localStorage.getItem('users') || '[]');
      var UserNameLengthVal = usersArray.filter(x => x.userName == this.username).length;
      var UserPassLengthVal = usersArray.filter(x => x.password == this.password).length;
      var UserCPassLengthVal = usersArray.filter(x => x.confirmpassword == this.confirmpassword).length;
      if (UserNameLengthVal == 0 && UserPassLengthVal == 0 && UserCPassLengthVal == 0) {
        if (usersArray.filter(x => x.email == this.email).length == 0 )  {
          if (this.password == this.confirmpassword)
          {
            
            this.insertNewUserToLocalStorage();
            alert("Details Submitted Successfully");
            this.route.navigateByUrl("/login");
          }
          else{
            alert("Password is not same :");
          }
        }
        else {
          alert("Email already exists :");
        }
      } else {
        alert('Please fill all fields :');
      }
    } else {
      //this.insertNewUserToLocalStorage();

      window.location.reload();
    }
    
  }
  private insertNewUserToLocalStorage() {
    debugger;
    var usersArray: any[] = JSON.parse(localStorage.getItem('users') || '[]');
    var newUserObj = { 'userName': this.username, 'email': this.email, 'password': this.password, 'confirmpassword': this.confirmpassword, 'selectedSoftware': this.selectedsoftware };
    usersArray.push(newUserObj);
    localStorage.setItem("users", JSON.stringify(usersArray));
  }
}