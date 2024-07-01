import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {
    tuiCardExpireValidator,
    tuiCardNumberValidator,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiInputCardGroup,
        ReactiveFormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiCard | null>(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);
}
