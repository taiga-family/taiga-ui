import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
    TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    TUI_INPUT_PASSWORD_OPTIONS,
} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-password-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_INPUT_PASSWORD_OPTIONS,
            useValue: {
                ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
                icons: {
                    hide: 'tuiIconEyeClosed',
                    show: 'tuiIconEyeOpen',
                },
            },
        },
    ],
})
export class TuiInputPasswordExample2 {
    testForm = new FormGroup({
        testValue: new FormControl('password', Validators.required),
    });
}
