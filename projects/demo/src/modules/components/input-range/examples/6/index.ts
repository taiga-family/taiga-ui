import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-range-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputRangeExample6 {
    readonly control = new UntypedFormControl([-30, 0]);

    // See https://angular.io/api/common/I18nPluralPipe
    readonly pluralize = {
        '=-1': 'day ago',
        other: 'days ago',
    };
}
