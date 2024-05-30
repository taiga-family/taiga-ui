import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {
    tuiCardExpireValidator,
    tuiCardNumberValidator,
    TuiInputCardGroupedComponent,
} from '@taiga-ui/addon-commerce';
import {TuiErrorComponent} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiInputCardGroupedComponent,
        ReactiveFormsModule,
        PolymorpheusModule,
        TuiErrorComponent,
        TuiFieldErrorPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl<TuiCard | null>(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);
}
