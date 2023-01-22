import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show: boolean;

  public LOGOURL = "../../../assets/coink-logo.png";

  constructor(private route: Router) {
    this.show = false;
  }

  showSidebar() {
    this.show = !this.show;

  }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.route.navigate(['/home']);
  }

}
