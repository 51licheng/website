import {Component} from "angular2/core";

@Component({
  selector: 'buy-page-information',
  template: `
  <div class="header-container">
    <h2>{{title}}</h2>
    <h3>里程：</h3>
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
          <td>AAdvantage Miles AA 美国航空</td>
          <td>8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>AAdvantage Miles AA 美国航空</td>
          <td>10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>AAdvantage Miles AA 美国航空</td>
          <td>15</td>
          <td>3</td>
        </tr>
        <tr>
          <td>ANA Mileage NH 全日空</td>
          <td>8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>ANA Mileage NH 全日空</td>
          <td>10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Delta Skymiles DL 达美</td>
          <td>15</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Delta Skymiles DL 达美</td>
          <td>8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>United MileagePlus UA 美联航</td>
          <td>10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>United MileagePlus UA 美联航</td>
          <td>15</td>
          <td>3</td>
        </tr>
        <tr>
          <td>United MileagePlus UA 美联航</td>
          <td>8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Cathay Pacific Airways CX 亚万 万里通</td>
          <td>10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Cathay Pacific Airways CX 亚万 万里通</td>
          <td>15</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <div>
    <h3>酒店：</h3>
    <div class="table-responsive">
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>{{column4}}</th>
          <th>{{column5}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Marriott&nbsp;万豪&nbsp;7&nbsp;free&nbsp;night</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Marriott&nbsp;万豪&nbsp;1&nbsp;free&nbsp;night</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Hyatt&nbsp;凯悦&nbsp;1&nbsp;free&nbsp;night</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hyatt&nbsp;凯悦&nbsp;1&nbsp;free&nbsp;night</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Hilton&nbsp;希尔顿&nbsp;7&nbsp;free&nbsp;night</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
    <div>
  </div>
  `
})

export class BuyPageInformation {
  title = "库存信息";
  column1 = "里程种类";
  column2 = "里程数（W）";
  column3 = "个权";
  column4 = "酒店种类";
  column5 = "个数";
}
