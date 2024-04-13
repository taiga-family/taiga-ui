import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'tui-input-card-grouped-example-3',
    templateUrl: './index.html',
    changeDetection,
})
export class TuiInputCardGroupedExample3 {
    protected readonly control = new FormControl<TuiCard | null>(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);
}
