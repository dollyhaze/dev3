import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface EventModal {
  venue_name:string;
  title:string;
  description: string;
}
@Component({
    selector: 'confirm',
    templateUrl: `./eventModal.component.html`
})
export class EventModalComponent extends DialogComponent<EventModal, boolean> implements EventModal {
  venue_name: string;
  title: string;
  description: string;
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
