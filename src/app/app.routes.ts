import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./features/public/public.routes").then((m) => m.PUBLIC_ROUTES),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./features/auth/auth.routes").then((m) => m.AUTH_ROUTES),
  },
  {
    path: "errors",
    loadChildren: () =>
      import("./features/errors/errors.routes").then((m) => m.ERROR_ROUTES),
  },
  {
    path: "**",
    redirectTo: "errors",
  },
];
