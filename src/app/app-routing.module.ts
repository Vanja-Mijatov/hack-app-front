import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoteControllerComponent } from './remote-controller/remote-controller.component';

const routes: Routes = [
  { path: 'home', component: RemoteControllerComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
