import { Component, OnInit } from '@angular/core';
import terrier from '../../data/terrier.json';
import herding from '../../data/herding.json';

interface JSONCONTENT {
  head: { vars: string[] };
  results: { bindings: any[] };
}


@Component({
  selector: 'app-dog-card',
  templateUrl: './Dog.component.html',
})

export class DogCardComponent implements OnInit {
  public JSONToIterate: JSONCONTENT;
  public terrier = terrier;
  public herding = herding;

  constructor() { }
  ngOnInit() {
  }
}
