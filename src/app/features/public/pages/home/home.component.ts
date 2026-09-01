import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  imports: [NavbarComponent, FooterComponent],
  selector: "app-home",
  styleUrl: "./home.component.scss",
  templateUrl: "./home.component.html",
})
export class HomeComponent {}
