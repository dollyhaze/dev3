import { Component, OnInit  } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface BarChartModal {
  data: object[];
  usedMonths: string[];
}
@Component({
    selector: 'confirm',
    templateUrl: `./barchart.component.html`
})
export class BarChartComponent extends DialogComponent<BarChartModal, boolean> implements BarChartModal, OnInit  {
  data: object[];
  usedMonths: string[];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [], label: "Events"},
  ];

  public ngOnInit() {
    this.barChartData[0].data = this.data
  }
  // events
  public chartClicked(e:any):void {
    this.close();
  }

  closeChart(){
    this.close();
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}
