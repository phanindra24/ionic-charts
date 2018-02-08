import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    var myChart = HighCharts.chart('container-contact', {
      chart: {
        type: 'column',
        zoomType: 'x'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
        min:0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        },
        column:{
          pointWidth:5
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2, 2, 3, 2, 1,2, 3, 2, 1]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1, 3, 4, 7, 2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5, 3, 4, 7, 2, 2, 3, 2, 1]
    }]
    });

    var timeline = HighCharts.chart('container-timeline', {
      chart: {
        type: 'bar',
        zoomType: 'x'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['Apples'],
        min:0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        },
        bar:{
          pointWidth:5
        }
    },
    series: [{
        name: 'John',
        data: [5]
    }, {
        name: 'Jane',
        data: [2]
    }, {
        name: 'Joe',
        data: [3]
    }]
    });
  }

}
