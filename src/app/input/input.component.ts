import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }  

  jurusan = ''
  penjelasan = ''
  submit(){
    let data = ['input', this.jurusan, this.penjelasan]
    this.router.navigate(['../list', data]);
  }
}