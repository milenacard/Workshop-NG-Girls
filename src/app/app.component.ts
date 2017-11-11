import { Component } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'my application magical';
  author = 'Mile Cárdenas';
  imageUrl;
  count =  30;
  baseUrl = 'https://api.adorable.io/avatars/500/';
  urlSuffix = '@adorable.io.png';

  constructor() {
      this.generateRandomFace();
   }

  generateRandomFace() {
    setInterval(()=>{
      this.imageUrl = `${this.baseUrl}${this.count}${this.urlSuffix}`
      this.count = this.count + 1;
    }, 1000);

  }
}
