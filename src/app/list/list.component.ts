import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute){}
  listjur = [[]]
  ngOnInit() {
    let tipe = this.route.snapshot.paramMap.get('0');
    let jurusan = this.route.snapshot.paramMap.get('1');
    let penjelasan = this.route.snapshot.paramMap.get('2');
    if(tipe == 'input'){
      this.input(jurusan, penjelasan)
    }
  }

  input(jurusan, penjelasan){
    let newArr = [jurusan, penjelasan]
    this.listjur.push(newArr)
  }

  edit(jurusan, penjelasan){
    for(let i = 0; i<this.listjur.length; i++){
      
    }
  }
}