import {Component} from "angular2/core";

@Component({
  selector: 'buy-page-header',
  template: `
  <div class="header-container">
    <h2>{{title}}</h2>
  </div>
  `
})

export class BuyPageHeader {
  title = "我要购买";
}
