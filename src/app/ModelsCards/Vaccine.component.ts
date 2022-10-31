import { Component, OnInit } from '@angular/core';
import piroplasmosis from '../../data/piroplasmosis.json';
import distemper from '../../data/distemper.json';

interface JSONCONTENT {
  head: { vars: string[] };
  results: { bindings: any[] };
}


@Component({
  selector: 'app-vaccine-card',
  templateUrl: './Vaccine.component.html',
})
export class VaccineCardComponent implements OnInit {
  public JSONToIterate: JSONCONTENT;
  public piroplasmosis: any;
  public distemper: any;

  constructor() { }
  ngOnInit() {
    this.piroplasmosis = piroplasmosis;
    this.distemper = distemper;
  }

}
