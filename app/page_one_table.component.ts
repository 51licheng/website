import {Component} from 'angular2/core'

@Component({
  selector: 'page-one-table',
  template:
    `
      <div class='container col-sm-12'>
        <div class="title-container">
          <h4>{{title}}</h4>
          <p>{{description}}</p>
        </div>
        <div class="table-responsive">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>{{column1}}</th>
              <th>{{column2}}</th>
              <th>{{column3}}</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>AAdvantage Miles AA 美国航空 (一千分)</td>
            <td>1150&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
            <td></td>
          </tr>
          <tr>
            <td>ANA Mileage NH 全日空 (一千分)</td>
            <td>1150&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
            <td></td>
          </tr>
          <tr>
            <td>Delta Skymiles DL 达美 (一千分)</td>
            <td>1150&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
            <td></td>
          </tr>
          <tr>
            <td>United MileagePlus UA 美联航 (一千分)</td>
            <td>1150&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
            <td></td>
          </tr>
          <tr>
            <td>Cathay Pacific Airways CX 亚万 万里通 (一千分)</td>
            <td>1150&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
            <td></td>
          </tr>
        </table>
        </div>

        <div class="table-responsive">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>{{column4}}</th>
              <th>{{column5}}</th>
              <th>{{column3}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marriott&nbsp;万豪&nbsp;7&nbsp;free&nbsp;night</td>
              <td>3500&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
              <td></td>
            </tr>
            <tr>
              <td>Marriott&nbsp;万豪&nbsp;1&nbsp;free&nbsp;night</td>
              <td>&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
              <td></td>
            </tr>
            <tr>
              <td>Hyatt&nbsp;凯悦&nbsp;1&nbsp;free&nbsp;night</td>
              <td>2070&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
              <td></td>
            </tr>
            <tr>
              <td>Hyatt&nbsp;凯悦&nbsp;1&nbsp;free&nbsp;night</td>
              <td>1500&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
              <td></td>
            </tr>
            <tr>
              <td>Hilton&nbsp;希尔顿&nbsp;7&nbsp;free&nbsp;night</td>
              <td>2000&nbsp;&nbsp;&nbsp;<a href="buy.html"><button type="button" class="btn btn-info btn-sm">购买</button></a></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div>
      </div>
    `
})

export class Table {
    title = "价格表（每百分） VIP客户登录可查看优惠价格";
    description = "(如果购买航空里程数量小于一万三千分，每订单额外收取12美元小额费用)";
    column1 = "里程种类";
    column2 = "代订机票（不含税费）";
    column3 = "充值";
    column4 = "酒店种类";
    column5 = "代订酒店（不含税费）";
}
