import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskManager';

  constructor(public loginService: LoginService) {}   // the login service
  // becomes a property in app.component and can be accessible in the template
}
