import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {RouterComponent} from './routerID/router/router.component';
import {AboutComponent} from './routerID/about/about.component';
import {HomeComponent} from './routerID/home/home.component';
import {ContactComponent} from './routerID/contact/contact.component';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},  // 默认首页设置
  {path: 'home', component: HomeComponent}, // 首页模块
  {path: 'about/:id', component: AboutComponent}, // 关于模块
  {path: 'contact', component: ContactComponent}, // 文章内容
  {path: 'contactus', redirectTo: 'contact'}, // 所有文章内容
];


@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
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
