import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { GeneralComponent } from './general/general.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : "",
    component : GeneralComponent
  },
  {
    path : "usuarios",
    component : UsersComponent
  },
  {
    path : "todos",
    component : TodosComponent
  },
  {
    path : "comentarios",
    component : CommentsComponent
  },
  {
    path : "photo-details",
    component : PhotoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
