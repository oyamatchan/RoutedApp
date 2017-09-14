import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedService} from './shared.service';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EntryComponent } from './entry/entry.component';
import { DisplayComponent } from './display/display.component';

const navRoutes:Routes=[
  {path:'entry', component:EntryComponent},
  {path:'display', component:DisplayComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(navRoutes)
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
