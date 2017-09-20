// 跨域 https://bird.ioliu.cn/v1?url=
import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
// let productList = 'https://bird.ioliu.cn/v1?url=http://api.yiguanjia.me/index.php?r=o2o/product/list';

export class MyHttpComponent implements OnInit {
  productList: string;
  help: Object;

  // constructor 的方法体是空的,我们要注入一个关键模块 Http
  constructor(private http: Http) {
    this.http = http;
    this.productList = 'http://api.yiguanjia.me/index.php?r=o2o/product/list';
    this.http.request(this.productList)
      .subscribe((res: Response) => {
        console.log(res.json().data.products)
      })
  }

  ngOnInit() {
  }

}
