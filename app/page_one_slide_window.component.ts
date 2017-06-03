import {Component} from 'angular2/core'

@Component({
   selector: 'page-one-slide-window',  //specifies selector for HTML element named 'app'
  //template property holds component's companion template that tells Angular how to render a view
  template:
    `
    <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="/img/pic1.jpg" alt="Los Angeles" style="width:100%;">
    </div>

    <div class="item">
      <img src="/img/pic2.jpg" alt="Chicago" style="width:100%;">
    </div>

    <div class="item">
      <img src="/img/pic3.jpeg" alt="New york" style="width:100%;">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
    `
})

export class SlideWindow {

}
