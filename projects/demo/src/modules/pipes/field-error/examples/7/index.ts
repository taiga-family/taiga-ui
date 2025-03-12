import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiLabel} from '@taiga-ui/core';
import {TuiFieldErrorPipe, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    template: 'My component with {{ context.$implicit }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error {
    protected readonly context = injectContext<{$implicit: boolean}>();
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputModule,
        TuiLabel,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: new PolymorpheusComponent(Error),
        }),
    ],
})
export default class Example {
    protected readonly test = new FormControl('', [Validators.required]);
}
