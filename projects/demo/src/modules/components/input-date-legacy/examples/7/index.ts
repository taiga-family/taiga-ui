import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import {TuiInputDateModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_FORMAT,
            useFactory: () =>
                inject(TUI_LANGUAGE).pipe(
                    map(({name}) => ({
                        ...TUI_DEFAULT_DATE_FORMAT,
                        mode: name === 'english' ? 'MDY' : 'DMY',
                        separator: name === 'english' ? '/' : '.',
                    })),
                ),
        },
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
