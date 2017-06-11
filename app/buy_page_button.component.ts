import {Component} from "angular2/core";

@Component({
  selector: 'buy-page-button',
  template: `
  <div class="container">
    <button (click)="goPage()" type="button" class="btn btn-info btn-sm">{{content1}}</button>
    <button (click)="goPage()" type="button" class="btn btn-danger btn-sm">{{content2}}</button>
  </div>
  `,
  styles: ['div { float: right; width: 100px; }']
})

export class BuyPageButton {
  content1 = "填写订单信息";
  content2 = "前往支付链接";
  goPage() {
    window.location.href='http://www.google.com/';
  }
}
