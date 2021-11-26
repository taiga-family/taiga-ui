import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';

import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'tui-input-card-grouped-example-3',
    templateUrl: './index.html',
    changeDetection,
})
export class TuiInputCardGroupedExample3 {
    readonly control = new FormControl(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);
}
