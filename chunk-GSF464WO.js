import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {
    TuiError,
    TuiHint,
    TuiTextfield,
    tuiValidationErrorsProvider,
} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiCurrencyPipe,
        TuiError,
        TuiHint,
        TuiInputNumber,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            max: (context: {max: number}): string => \`Too expensive, max \${context.max}\`,
        }),
    ],
})
export default class Example {
    protected readonly data = [{name: 'Latte'}, {name: 'Cappuccino'}] as const;
    protected readonly controls = [
        new FormControl(null, [Validators.required, Validators.max(6)]),
        new FormControl(null, [Validators.required, Validators.max(5)]),
    ] as const;
}
`;export{r as default};
