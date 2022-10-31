import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import manager from '../../data/managers.json';
import volunteer from '../../data/volunteers.json';

@Component({
  selector: 'app-user-card',
  templateUrl: './User.component.html',
})
export class UserCardComponent implements OnInit {
  public manager = manager;
  public volunteer = volunteer;

  constructor(private router: Router) {

   }
  ngOnInit() {
  }

  redirect(title) {
    this.router.navigate([title]);

  }

}
