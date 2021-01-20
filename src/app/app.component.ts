import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  //template:'<div></div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'chat-app';
  email: string = "";
  password: string = "";
  constructor(public authService: AuthService){
  }

}
