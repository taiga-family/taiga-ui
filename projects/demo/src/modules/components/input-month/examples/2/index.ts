import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMonth} from '@taiga-ui/cdk';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputMonth,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputMonth,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: interval(1000).pipe(
                map((i) => (i % 2 ? 'NOW!!!' : 'Enter this!')),
                startWith('Required field!'),
            ),
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl<TuiMonth | null>(
        null,
        Validators.required,
    );
}
