import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AppRoutes],
  providers: [{ useValue: '/ngx-big-screen', provide: APP_BASE_HREF }],
  bootstrap: [AppComponent],
})
export class AppModule {}
