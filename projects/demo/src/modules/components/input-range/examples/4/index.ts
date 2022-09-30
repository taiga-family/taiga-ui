import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-range-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputRangeExample4 {
    readonly control = new FormControl([20, 40]);

    // See https://angular.io/api/common/I18nPluralPipe
    readonly pluralize = {
        other: `%`,
    };
}
