import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  // constructor 的方法体是空的,我们要注入一个关键模块 Http
  constructor(private http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json().body;
        this.loading = false;
      })
  }

}
