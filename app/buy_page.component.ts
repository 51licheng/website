import {Component} from 'angular2/core'
import {BuyPageHeader} from './buy_page_header.component'
import {BuyPageForm} from './buy_page_form.component'
import {BuyPageInformation} from './buy_page_information.component'
import {BuyPageButton} from './buy_page_button.component'


@Component({
  selector: 'buy-page',
  template: `
    <buy-page-header></buy-page-header>
    <buy-page-form></buy-page-form>
    <buy-page-information></buy-page-information>
  `,
  directives: [BuyPageHeader, BuyPageForm, BuyPageInformation, BuyPageButton]
})

export class BuyPage {

}
