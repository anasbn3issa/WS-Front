import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-pet-card',
  templateUrl: './pet.component.html',
})
export class PetCardComponent implements OnInit {
  constructor(private router: Router) {

   }
  ngOnInit() {
  }

  redirect(title) {
    this.router.navigate([title]);

  }

}
