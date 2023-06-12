import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogComponent } from './dog/dog.component';
import { MiceComponent } from './mice/mice.component';

const routes: Routes = [{path:"cats", component:CatsComponent},
{path:"dog", component:DogComponent},
{path:"mice", component:MiceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
