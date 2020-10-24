import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users/users.component";
import { MoviesComponent } from "./movies/movies.component";
import { LayoutComponent } from "./layout/layout.component";
import { MaterialModule } from "src/app/core/shared/material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { ReactiveFormsModule } from "@angular/forms";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "users" },
      { path: "users", component: UsersComponent },
      { path: "movies", component: MoviesComponent },
      { path: "add-movie", component: AddMovieComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UsersComponent,
    MoviesComponent,
    LayoutComponent,
    AddMovieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
