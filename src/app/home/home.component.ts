import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {}
}
