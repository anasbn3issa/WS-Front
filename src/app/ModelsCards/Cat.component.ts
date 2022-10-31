import { Component, OnInit } from '@angular/core';
import catus from '../../data/catus.json';
import carnivora from '../../data/carnivora.json';


interface JSONCONTENT {
  head: { vars: string[] };
  results: { bindings: any[] };
}


@Component({
  selector: 'app-cat-card',
  templateUrl: './Cat.component.html',
})

export class CatCardComponent implements OnInit {
  public JSONToIterate: JSONCONTENT;
  public catus: any;
  public carnivora: any;

  constructor() { }
  ngOnInit() {
    this.catus = catus;
    this.carnivora = carnivora;
  }
}
