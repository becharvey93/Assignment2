import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { ChannelsComponent } from './channels/channels.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:'login', component:LoginComponent }, 
  { path:'groups', component:GroupsComponent },
  { path:'channels', component:ChannelsComponent},
  { path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
