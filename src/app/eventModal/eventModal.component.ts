import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface EventModal {
  venue_name:string;
  title:string;
  description: string;
  mostClosestParking: number;
  closestParkings: number;
  chartData: Array<number>;
  farthestPrakings: number;
}
@Component({
    selector: 'confirm',
    templateUrl: `./eventModal.component.html`
})
export class EventModalComponent extends DialogComponent<EventModal, boolean> implements EventModal {
  venue_name: string;
  title: string;
  description: string;
  mostClosestParking: number;
  chartData: Array<number>;
  closestParkings: number;
  farthestPrakings: number;
  public doughnutChartLabels:string[] = ['Parkeeplaatsen in loopafstand', 'Parkeerplaatsen buiten loopafstand'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public chartClicked(e:any):void {
    console.log(this.closestParkings);
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
