import {Component} from "angular2/core";

@Component({
  selector: 'page-one-header',
  template: `
  <div class="header-container">
    <h2>{{title}}</h2>
  </div>
  `
})

export class HeaderPageOne {
  title = "我爱里程网"
}
