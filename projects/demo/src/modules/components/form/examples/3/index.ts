import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHeader, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSegmented, TuiStepper, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiCardLarge,
        TuiForm,
        TuiHeader,
        TuiSegmented,
        TuiStepper,
        TuiTabs,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected readonly index = signal(0);

    protected segmentedIndex = 0;

    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        ip: new FormControl('', Validators.required),
    });

    protected previous(): void {
        this.index.update((index) => index - 1);
    }

    protected next(): void {
        this.index.update((index) => index + 1);
    }
}
