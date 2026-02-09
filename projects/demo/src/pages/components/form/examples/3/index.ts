import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiCheckbox, TuiInput, TuiTitle} from '@taiga-ui/core';
import {TuiSegmented, TuiStepper, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiCardLarge,
        TuiCheckbox,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiSegmented,
        TuiStepper,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
