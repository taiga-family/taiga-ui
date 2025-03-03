import {AsyncPipe, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiAppearance,
    TuiButton,
    TuiError,
    TuiIcon,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiSegmented,
    TuiStepper,
    TuiSwitch,
    TuiTabs,
    TuiTooltip,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        ReactiveFormsModule,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiError,
        TuiFieldErrorPipe,
        TuiForm,
        TuiHeader,
        TuiIcon,
        TuiSegmented,
        TuiSwitch,
        TuiTextfield,
        TuiTitle,
        TuiTooltip,
        TuiStepper,
        TuiTabs,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected readonly index = signal(0);

    protected segmentedIndex = 0;

    protected readonly first = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl(''),
        subscribe: new FormControl(false),
        basic: new FormControl(true),
    });

    protected readonly second = new FormGroup({
        ip: new FormControl('', Validators.required),
        mask: new FormControl(''),
        basic: new FormControl(true),
    });

    protected previous(): void {
        this.index.update((index) => index - 1);
    }

    protected next(): void {
        this.index.update((index) => index + 1);
    }
}
