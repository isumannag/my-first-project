import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  errorMessage:string='';
  constructor(private actvRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessage = this.actvRoute.snapshot.data['message'];
    this.actvRoute.data.subscribe(
      (data)=> {
        this.errorMessage = data['message'];
      }
    );
  }

}
