import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component'
import { PageNotFoundComponentComponent } from './page-not-found.component/page-not-found.component.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'message', component: MessageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
