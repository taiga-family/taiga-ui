import {I18nPluralPipe, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputRangeModule,
        ReactiveFormsModule,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        I18nPluralPipe,
    ],
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl([0, 7]);

    // See https://angular.io/api/common/I18nPluralPipe
    protected readonly pluralize = {
        '=0': 'days later',
        '=1': 'day later',
        other: 'days later',
    };
}
