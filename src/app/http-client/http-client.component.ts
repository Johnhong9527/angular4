import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})

export class HttpClientComponent implements OnInit {

  constructor(private http: Http) {
    this.http.request('http://api.yiguanjia.me/index.php?r=o2o/product/list')
      .subscribe((res: Response) => {
        console.log(res.json().data.products);
      });
  }

  ngOnInit(): void {
  }

}
