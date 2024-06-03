import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintOptionsDirective} from '@taiga-ui/core';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit';
import {TuiInputPasswordModule, tuiInputPasswordOptionsProvider} from '@taiga-ui/legacy';
import {of} from 'rxjs';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputPasswordModule, TuiHintOptionsDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPasswordOptionsProvider({
            icons: {
                hide: 'tuiIconLockLarge',
                show: 'tuiIconUnlockLarge',
            },
        }),
        {
            provide: TUI_PASSWORD_TEXTS,
            useValue: of(['']),
        },
    ],
})
export default class ExampleComponent {
    protected testForm = new FormGroup({
        testValue: new FormControl('password', Validators.required),
    });
}
