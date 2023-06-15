import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router){}
  
  isLoginPage(): boolean{
    return this.route.url === '/login';
  }

  isMainPage(): boolean{
    return this.route.url === '/';
  }

  isRegisterPage(): boolean{
    return this.route.url === '/register';
  }
}
