import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  // ionViewDidLoad() {
  //   var myChart = HighCharts.chart('container', {
  //     chart: {
  //       type: 'column'
  //   },
  //   title: {
  //       text: 'Stacked bar chart'
  //   },
  //   xAxis: {
  //       categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  //   },
  //   yAxis: {
  //       min: 0,
  //       title: {
  //           text: 'Total fruit consumption'
  //       }
  //   },
  //   legend: {
  //       reversed: true
  //   },
  //   plotOptions: {
  //       series: {
  //           stacking: 'normal'
  //       }
  //   },
  //   series: [{
  //       name: 'John',
  //       data: [5, 3, 4, 7, 2]
  //   }, {
  //       name: 'Jane',
  //       data: [2, 2, 3, 2, 1]
  //   }, {
  //       name: 'Joe',
  //       data: [3, 4, 4, 2, 5]
  //   }]
  //   });
  // }

}
