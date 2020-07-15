import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { Routes, RouterModule } from '@angular/router'

//Using routing for both the components
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'success', component: SuccessComponent}
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
