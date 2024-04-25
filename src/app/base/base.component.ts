import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base',
  template: '', // Boş bir şablon ekleyebilirsiniz veya ihtiyaca göre bir şablon belirleyebilirsiniz
})

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }
  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }


}
export enum SpinnerType {
  BallClimbingDot = "s1",
  BallAtom = "s2"

}
