import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';

@Component({
    selector: `tui-input-card-grouped-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
})
export class TuiInputCardGroupedExample3 {
    readonly control = new FormControl(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);
}
