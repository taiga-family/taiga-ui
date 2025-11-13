import"./chunk-42JZD6NG.js";var r=`import {Component, inject} from '@angular/core';
import {
    type AsyncValidatorFn,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';
import {delay, of} from 'rxjs';

function asyncValidatorFn(isE2E: boolean): AsyncValidatorFn {
    return ({value}) =>
        value && /^[a-zA-Z]+$/.test(value)
            ? of(null)
            : of({error: 'Only latin letters allowed'}).pipe(delay(isE2E ? 0 : 3000));
}

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiForm, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        text: new FormControl(
            '\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442',
            [Validators.required],
            [asyncValidatorFn(inject(TUI_IS_E2E))],
        ),
    });
}
`;export{r as default};
