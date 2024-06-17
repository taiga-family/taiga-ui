import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSliderComponent, ReactiveFormsModule, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly labels: number[] = [0, 250, 500, 750, 1000];
    protected readonly formControl = new FormControl(250);

    protected patchValue(newValue: number): void {
        this.formControl.patchValue(newValue);
    }
}
