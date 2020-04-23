import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private router: Router){}

  LOGIN(){
    this.router.navigate(['/login']);
  }

  detail(){
    this.router.navigate(['/detail',4]);
  }

  INPUT(){
    this.router.navigate(['/input']);
  }

  EDIT(){
    this.router.navigate(['/edit']);
  }

  LIST(){
    this.router.navigate(['/list']);
  }
}
