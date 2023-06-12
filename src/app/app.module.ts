import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogComponent } from './dog/dog.component';
import { MiceComponent } from './mice/mice.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogComponent,
    MiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
