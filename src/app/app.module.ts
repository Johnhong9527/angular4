import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {RouterComponent} from './router/router.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},  // 默认首页设置
  {path: 'home', component: HomeComponent}, // 首页模块
  {path: 'about', component: AboutComponent}, // 关于模块
  {path: 'contact', component: ContactComponent}, // 文章内容
  {path: 'contactus', redirectTo: 'contact'}, // 所有文章内容
];


@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
