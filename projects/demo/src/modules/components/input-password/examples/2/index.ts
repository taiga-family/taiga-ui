import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_PASSWORD_TEXTS, tuiInputPasswordOptionsProvider} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    selector: 'tui-input-password-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPasswordOptionsProvider({
            icons: {
                hide: 'tuiIconUnlockLarge',
                show: 'tuiIconLockLarge',
            },
        }),
        {
            provide: TUI_PASSWORD_TEXTS,
            useValue: of(['']),
        },
    ],
})
export class TuiInputPasswordExample2 {
    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('password', Validators.required),
    });
}
