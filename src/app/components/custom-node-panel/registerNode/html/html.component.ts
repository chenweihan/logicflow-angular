import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  @Input()
  get message(): string { return this.htmlMessage; }
  set message(message: string) {
    this.htmlMessage = message;
  }

  htmlMessage = '';

  constructor() {

  }

  ngOnInit(): void {

  }

}
