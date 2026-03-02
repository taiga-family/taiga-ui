import"./chunk-HU6DUUP4.js";var t=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiError, TuiInput, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    template: 'Required: {{ context.$implicit }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error {
    protected readonly context = injectContext<TuiContext<boolean>>();
}

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({required: new PolymorpheusComponent(Error)}),
    ],
})
export default class Example {
    protected readonly test = new FormControl('', [Validators.required]);
}
`;export{t as default};
