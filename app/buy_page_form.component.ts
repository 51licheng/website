import {Component} from "angular2/core";

@Component({
  selector: 'buy-page-form',
  template: `
  <div class="container">
    <form class="form-horizontal">
      <fieldset>
        <input type="hidden" name="form" value="pickmiles">
          <div class="form-group">
              <label class="col-sm-2 control-label" for="pickmiles-element-2">
                <span class="required">* </span>
                  选择购买方式
              </label>
              <div class="col-sm-10">
                <select class="form-control" name="boption" required="">
                  <option value="BK" selected="selected">代订机票/酒店</option>
                  <option value="CZ">充值</option>
                </select>
              </div>
            </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <span class="required">* </span>
              里程种类
              </label>
            <div class="col-sm-10">
              <select class="form-control" name="product_id" required="">
                <option value="57">AAdvantage Miles AA 美国航空 (一千分)</option>
                <option value="67">ANA Mileage NH 全日空 (一千分)</option>
                <option value="58">Delta Skymiles DL 达美 (一千分)</option>
                <option value="59">United MileagePlus UA 美联航 (一千分)</option>
                <option value="60">Cathay Pacific Airways CX 亚万 万里通 (一千分)</option>
                <option value="64">Marriott&nbsp;万豪&nbsp;7&nbsp;free&nbsp;night</option>
                <option value="53">Marriott&nbsp;万豪&nbsp;1&nbsp;free&nbsp;night</option>
                <option value="50">Hyatt&nbsp;凯悦&nbsp;1&nbsp;free&nbsp;night&nbsp;type1</option>
                <option value="69">Hyatt&nbsp;凯悦&nbsp;1&nbsp;free&nbsp;night&nbsp;type2</option>
                <option value="73">Hilton&nbsp;希尔顿&nbsp;7&nbsp;free&nbsp;night</option>
              </select>
            </div>
          </div>
          <div class="form-group">
              <label class="col-sm-2 control-label" for="pickmiles-element-4">
                <span class="required">* </span>
                数量
              </label>
            <div class="col-sm-10">
              <input type="number" class="form-control" name="quantity" required="" value="35">
              <span class="help-block">extra information</span>
            </div>
          </div>
          </fieldset>
          </form>
          <div class="container">
            <button (click)="goPage1()" type="button" class="btn btn-info btn-sm">{{content1}}</button>
            <button (click)="goPage2()" type="button" class="btn btn-danger btn-sm">{{content2}}</button>
          </div>
  </div>
  `,
  styles: ['button { margin: 10 10 10 10; }']
})

export class BuyPageForm {
  title = "我要购买";
  content1 = "填写订单信息";
  content2 = "前往支付链接";
  goPage1() {
    window.location.href='http://www.google.com/';
  }
  goPage2() {
    window.location.href="https://item.taobao.com/item.htm?id=552380615049";
  }
}
