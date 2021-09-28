import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'tui-rating-example-1',
    templateUrl: './index.html',
    changeDetection,
})
export class TuiRatingExample1 {
    rateValue: number = 2;

    form: FormGroup = this.fb.group({rateControl: 2});

    constructor(private readonly fb: FormBuilder) {}

    get rateControl(): AbstractControl | null {
        return this.form.get('rateControl');
    }

    enableOrDisable(): void {
        if (this.rateControl?.disabled) {
            this.rateControl?.enable();
        } else {
            this.rateControl?.disable();
        }
    }
}
