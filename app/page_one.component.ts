import {Component} from 'angular2/core'
import {HeaderPageOne} from './page_one_header.component'
import {SlideWindow} from './page_one_slide_window.component'
import {SiteDescription} from './page_one_site_description.component'
import {Table} from './page_one_table.component'


@Component({
  selector: 'page-one',
  template: `
    <page-one-header></page-one-header>
    <page-one-slide-window></page-one-slide-window>
    <page-one-site-description></page-one-site-description>
    <page-one-table></page-one-table>
  `,
  directives: [HeaderPageOne, SlideWindow, SiteDescription, Table]
})

export class PageOne {

}
