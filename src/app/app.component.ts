import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LoginComponent, RouterModule],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
