import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sterilization from '../../data/sterilizations.json';


interface JSONCONTENT {
  head: { vars: string[] };
  results: { bindings: any[] };
}

@Component({
  selector: 'app-sterilizations-card',
  templateUrl: './Treatement.component.html',
})
export class TreatementCardComponent implements OnInit {
  public JSONToIterate: JSONCONTENT;
  public sterilization: any;

  constructor(private router: Router) { }
  ngOnInit() {
    this.sterilization = sterilization;
  }
  redirect(title) {
    console.log(title);

    this.router.navigate([title]);

  }
}

