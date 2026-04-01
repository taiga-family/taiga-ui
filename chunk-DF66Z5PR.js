import"./chunk-HU6DUUP4.js";var o=`import {isPlatformBrowser} from '@angular/common';
import {Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_VALIDATION_ERRORS, TuiError, TuiInput} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';
import {map, timer} from 'rxjs';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiForm, TuiInput, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useFactory: () => ({
                required: 'Enter this!',
                email: 'Enter a valid email',
                maxlength: ({requiredLength}: {requiredLength: string}) =>
                    \`Maximum length \u2014 <b>\${requiredLength}</b>\`,
                minlength: ({requiredLength}: {requiredLength: string}) =>
                    signal(\`Minimum length \u2014 <b>\${requiredLength}</b>\`),
                min: isPlatformBrowser(inject(PLATFORM_ID))
                    ? toSignal(
                          timer(0, 2000).pipe(
                              map((index) => (index % 2 ? 'Fix please' : 'Min number 3')),
                          ),
                      )
                    : 'Min number 3',
            }),
        },
    ],
})
export default class Example {
    protected readonly form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        value: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),
        number: new FormControl(2, [Validators.min(3)]),
    });
}
`;export{o as default};
