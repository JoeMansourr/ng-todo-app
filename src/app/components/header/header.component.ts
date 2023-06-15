import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Angular Todo List";
  logo: string = "../../../favicon.ico";
  userStatus: string = "Log in";
  constructor(){}

  ngOnInit(): void {}
}
