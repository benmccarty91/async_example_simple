import { Component, OnInit } from '@angular/core';
declare const bentest: any;

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    bentest();
  }

}
