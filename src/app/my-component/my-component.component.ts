import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyComponentComponent implements OnInit {

  count = 0;
  imgSource = './../favicon.ico';
  enable = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  countUp(){
    this.count = this.count + 1;
  }

  disableInput() {
    this.enable = !this.enable;
  }
}

