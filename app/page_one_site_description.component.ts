import {Component} from 'angular2/core'

@Component({
  selector: 'page-one-site-description',
  template:
  `
    <div class="container">
      <h3>{{title}}</h3>
      <p>{{content}}</p>
    </div>
  `
})

export class SiteDescription {
  title = "我爱里程网, 最安全最方便极优惠的里程提供商"
  content = "免票直通网所经营的里程来源于美国个人，经过严格审核，"
        + "有真实姓名地址，无盗卡和团体卡。里程未经过他人之手，业界最安全；"
        + " 崇尚合作意识，各种情况的处理尽量事先说明，承诺的就能做到。"
        + "买家可以在网站直接查库存，直接下单，直接操作，不需要人工查询。"
        + "请在下面价格表中选择对应的里程和购买方式后点击“购买” 开始。"
}
