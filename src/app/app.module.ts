import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule} from '@angular/router';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const ROUTES: Routes =[
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'input', component: InputComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit', component: EditComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, DetailComponent, InputComponent, ListComponent, EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
 
}
