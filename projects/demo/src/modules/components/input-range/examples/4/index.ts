import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-range-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputRangeExample4 {
    readonly control = new UntypedFormControl([20, 40]);

    // See https://angular.io/api/common/I18nPluralPipe
    readonly pluralize = {
        other: '%',
    };
}
