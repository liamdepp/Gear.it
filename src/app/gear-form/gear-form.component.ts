import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gear-form',
  templateUrl: './gear-form.component.html',
  styleUrls: ['./gear-form.component.css']
})
export class GearFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
