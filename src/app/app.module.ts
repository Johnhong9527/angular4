import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MyHttpComponent } from './my-http/my-http.component';
import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    MyHttpComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/*

@Component(...)
export class MyComponent implements OnInit {

  results: string[];

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }
}

 */
