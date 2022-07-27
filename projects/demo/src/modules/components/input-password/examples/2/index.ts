import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_PASSWORD_TEXTS, tuiInputPasswordOptionsProvider} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    selector: `tui-input-password-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiInputPasswordOptionsProvider({
            icons: {
                hide: `tuiIconLockLarge`,
                show: `tuiIconLockOpenLarge`,
            },
        }),
        {
            provide: TUI_PASSWORD_TEXTS,
            useValue: of([``]),
        },
    ],
})
export class TuiInputPasswordExample2 {
    testForm = new FormGroup({
        testValue: new FormControl(`password`, Validators.required),
    });
}
