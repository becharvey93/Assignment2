import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { ChannelsComponent } from './channels/channels.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpModule } from '@angular/http';
//import { ChatService } from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupsComponent,
    ChannelsComponent,
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [/*ChatService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
