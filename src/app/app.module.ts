import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';// include the routermodule and routes the path you want
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';// first include this 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatAutocompleteModule} from "@angular/material/autocomplete";
// import {FormControl} from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
//import { MatRippleModule } from '@angular/material/core/typings/ripple';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';



const routes: Routes =[
  {path:'' , component:SignupComponent}, // leave path blank and set it whatever path you want to redirect
  {path:'login',component:LoginComponent},    // set all the paths and components
  {path:'signup', component:SignupComponent},
  {path:'quiz', component:QuizComponent},
  {path:'result',component:ResultComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  
 
]

@NgModule({
  declarations: [
    AppComponent,   // Declair all the components here
    SignupComponent,
    LoginComponent,
    QuizComponent,
    ResultComponent,
    ForgotPasswordComponent
           
  ],
  
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes) ,// This is important to import  
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatTableModule  ,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable()
export class AppModule { 
 // constructor( public router: Router,private authService: AuthService) { }

  // canActivate() {
  //   return !this.authService.();
  // }

}
