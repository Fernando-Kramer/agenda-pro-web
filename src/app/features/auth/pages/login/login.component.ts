import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule, RouterLink],
  selector: "app-login",
  styleUrl: "./login.component.scss",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  email = "";
  password = "";
  remember = false;

  showPassword = false;
  isLoading = false;
  showMockMessage = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.showMockMessage = false;
    this.isLoading = true;

    // MOCK
    setTimeout(() => {
      this.isLoading = false;
      this.showMockMessage = true;

      console.log({
        email: this.email,
        password: this.password,
        remember: this.remember,
      });
    }, 1000);
  }
}
