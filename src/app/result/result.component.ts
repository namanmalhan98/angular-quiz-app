import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  position: number;
  name: string;
  Email: string;
  selectedoption:string;
};

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Shubham', Email: 'example@gmail.com', selectedoption: 'Software Trainee'},
  {position: 2, name: 'Kundan', Email:  'example@gmail.com', selectedoption: 'Associate Software Developer'},
  {position: 3, name: 'prashant', Email: 'example@gmail.com', selectedoption: 'Software Developer'},
  {position: 4, name: 'naman' , Email: 'example@gmail.com', selectedoption: 'Team Leader'},
  {position: 5, name: 'sourav', Email: 'example@gmail.com', selectedoption: 'Managing Director'},
  {position: 6, name: 'Imran', Email: 'example@gmail.com', selectedoption: 'Software Developer'},
  {position: 7, name: 'Abhishek', Email: 'example@gmail.com', selectedoption: 'Software Trainee'},
  {position: 8, name: 'naman', Email: 'example@gmail.com', selectedoption: 'Managing Director'},
  {position: 9, name: 'Amit', Email:'example@gmail.com', selectedoption: 'Associate Software Developer'},
  {position: 10, name: 'gaurav', Email: 'example@gmail.com', selectedoption: 'Software Trainee'},
];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'Email', 'selectedoption'];
  dataSource = ELEMENT_DATA;
   

  username = '';
  email = '';
  password = '';
  confirmpassword = '';
  selectedsoftware = '';

  result:any; 
  constructor() { }

  ngOnInit(): void {
    userArray : [] = JSON.parse(localStorage.getItem('users') || '[]');
    this.result= localStorage.getItem('result')??'';
    
  };
  
}
