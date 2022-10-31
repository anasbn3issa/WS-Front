import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import associations from '../../data/associations.json';
import cats from '../../data/cats.json';
import dogs from '../../data/dogs.json';
import locals from '../../data/locals.json';
import managers from '../../data/managers.json';
import pets from '../../data/pets.json';
import rewards from '../../data/rewards.json';
import sterilizations from '../../data/sterilizations.json';
import vaccines from '../../data/vaccines.json';
import veterinerians from '../../data/veterinerians.json';
import volunteers from '../../data/volunteers.json';



interface JSONCONTENT {
  head: { vars: string[] };
  results: { bindings: any[] };
}

@Component({
  selector: 'app-child-card',
  templateUrl: './ChildCard.component.html',
})
export class ChildCardComponent implements OnInit {

  public param: any;
  public JSONToIterate: JSONCONTENT;


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);

      this.param = params.title;
      console.log(this.param);

    });
  }

  ngOnInit() {
    this.viewCard(this.param);
  }

  viewCard(title: string) {
    switch (title) {
      case 'associations':
        console.log('in switch assoc');
        this.JSONToIterate = associations;
        console.log(this.JSONToIterate);
        break;
      case 'cats':
        this.JSONToIterate = cats;
        console.log(this.JSONToIterate);
        break;
      case 'dogs':
        this.JSONToIterate = dogs;
        console.log(this.JSONToIterate);
        break;
      case 'locals':
        this.JSONToIterate = locals;
        console.log(this.JSONToIterate);
        break;
      case 'pets':
        this.JSONToIterate = pets;
        console.log(this.JSONToIterate);
        break;
      case 'rewards':
        this.JSONToIterate = rewards;
        console.log(this.JSONToIterate);
        break;
      case 'managers':
        this.JSONToIterate = managers;
        console.log(this.JSONToIterate);
        break;
      case 'veterinerians':
        this.JSONToIterate = veterinerians;
        console.log(this.JSONToIterate);
        break;


    }
  }

}
