import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "app-home",
  styleUrl: "./home.component.scss",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  login() {
    window.location.href = "http://localhost:4200/auth/login";
  }
}
