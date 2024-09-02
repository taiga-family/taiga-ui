import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TUI_PASSWORD_TEXTS,
    TuiInputPassword,
    tuiInputPasswordOptionsProvider,
} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiTextfield, TuiInputPassword],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPasswordOptionsProvider({
            icons: {
                hide: '@tui.lock',
                show: '@tui.lock-open',
            },
        }),
        {
            provide: TUI_PASSWORD_TEXTS,
            useValue: of(['', '']),
        },
    ],
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl('password', Validators.required),
    });
}
