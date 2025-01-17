import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiHint, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorContentPipe,
    TuiInputNumber,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiCurrencyPipe,
        TuiFieldErrorContentPipe,
        TuiHint,
        TuiInputNumber,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            max: (context: {max: number}): string => `Too expensive, max ${context.max}`,
        }),
    ],
})
export default class Example {
    protected readonly data = [{name: 'Latte'}, {name: 'Cappuccino'}] as const;

    protected latteControl = new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(6),
    ]);

    protected cappuccinoControl = new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(5),
    ]);

    protected controls = [this.latteControl, this.cappuccinoControl];

    protected readonly columns = ['name', 'price'];
}
