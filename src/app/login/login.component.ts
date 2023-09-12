import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import routeConfig from '../routes';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  imports: [CommonModule, RouterModule, HomeComponent],
})
export class LoginComponent implements OnInit {
  // operatorList: Operator[] = [];
  constructor() {}

  ngOnInit() {}
}
