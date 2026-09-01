import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "app-navbar",
  styleUrl: "./navbar.component.scss",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  login() {
    window.location.href = "http://localhost:4200/auth/login";
  }
}
