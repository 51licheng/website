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
              <th>{{column4}}</th>
              <th>{{column5}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AAdvantage Miles AA 美国航空 (一千分)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Air Canada Aeroplan AC 加拿大航空 (一千分)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Air France miles AF 法国航空 (一千分)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Alaska Airlines AS 阿拉斯加航空 (一千分)</td>
              <td>123&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-info btn-sm">购买</button></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ANA Mileage NH 全日空 (一千分)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div>
      </div>
    `
})

export class Table {
    title = "价格表（每千分） VIP客户登录可查看优惠价格";
    description = "(如果购买航空里程数量小于一万三千分，每订单额外收取12美元小额费用)";
    column1 = "里程种类";
    column2 = "代订机票（不含税费）";
    column3 = "定做账号";
    column4 = "充值";
    column5 = "现成账号";
}
