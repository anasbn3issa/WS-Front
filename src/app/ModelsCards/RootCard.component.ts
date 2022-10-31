import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import rootData from '../../data/allfiles.json';


interface JSONCONTENT {
  head: { vars: string[] };
  results: { bindings: any[] };
}

@Component({
  selector: 'app-root-card',
  templateUrl: './RootCard.component.html',
  styleUrls: ['./RootCard.component.css'],
})
export class RootCardComponent implements OnInit {
  public data: any[];
  public param: string;
  public JSONToIterate: JSONCONTENT;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.data = rootData;
    console.log(this.JSONToIterate?.results[0]);

  }
  redirect(title) {
    this.router.navigate(['children', title]);
    if(title === 'pets'){
      this.router.navigate(['pets']);
    }
    if(title === 'treatement'){
      this.router.navigate(['treatement']);
    }
    if(title === 'vaccine'){
      this.router.navigate(['vaccine']);
    }
    if(title === 'users'){
      this.router.navigate(['users']);
    }
  }

}
