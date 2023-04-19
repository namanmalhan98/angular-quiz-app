import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myControl = new FormControl();
  options: User[] = [
    { name: 'Software Trainee' },
    { name: 'Associate Software Developer' },
    { name: 'Software Developer' }
  ];
  filteredOptions: Observable<User[]>;

  userpassword = '';
  email = '';
  RouterNavigateByUrl: string;

  nn = '';
  constructor(private route: Router) {};

  show: boolean = false;
  password() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  user: any = [];

  onSubmit() {
   
    
    debugger;
    if (localStorage.getItem('users') != null) {
      var usersArray: any[] = JSON.parse(localStorage.getItem('users') || '[]');

      //Working code
    //   const filte = usersArray.filter((item)=>{
    //     return item.email == this.email && item.password == this.userpassword;
    //  });

    //     if(filte.length == 0){
    //         alert("Email or Password is worng :")
    //     }
    //     else{
    //             alert('Successfully login :');
    //     }
    // ------------------------------------------------------------
          const emailElement = usersArray.filter((val) => {
            return val.email == this.email;
          } );
          const passwordElement = usersArray.filter((valP) => {
            return valP.password == this.userpassword;
          }); 

         if(this.email.length != 0 && this.userpassword.length != 0)
         {
            if(emailElement.length != 0 && passwordElement.length != 0)
            {
              alert("Successfully login");
              this.route.navigateByUrl("/quiz"); 
            }else{
              alert("email or password is worng :");
            }
         } else{
          alert("Please enter the email or password field : ")
         }

      // if (usersArray.filter(x => x.password == this.userpassword).length == 0 && this.userpassword.length != 0 ) {
      //   debugger;
         
      //   if (usersArray.filter(x => this.email ==  x.email).length == 0  && this.email.length != 0) {
      //     alert('Successfully login');
      //     this.route.navigateByUrl("/quiz");  
      //   } else {
      //     alert("Please enter the Email:");
      //   }       
      // } else {
      //   alert('Please enter password ');
      // } 
    }
  }

  
}