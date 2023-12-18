import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-range-example-3',
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
export class TuiInputRangeExample3 {
    readonly control = new UntypedFormControl([0, 7]);

    // See https://angular.io/api/common/I18nPluralPipe
    readonly pluralize = {
        '=0': 'days later',
        '=1': 'day later',
        other: 'days later',
    };
}
