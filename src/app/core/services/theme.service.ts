import { Injectable } from "@angular/core";

export type Theme = "light" | "dark";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly html = document.documentElement;

  setTheme(theme: Theme): void {
    this.html.dataset["theme"] = theme;
  }

  getTheme(): Theme {
    return this.html.dataset["theme"] === "dark" ? "dark" : "light";
  }

  toggleTheme(): void {
    this.setTheme(this.getTheme() === "light" ? "dark" : "light");
  }
}
