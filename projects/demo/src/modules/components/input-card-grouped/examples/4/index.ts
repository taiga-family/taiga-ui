import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-card-grouped-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputCardGroupedExample4 {
    control = new FormControl({
        card: ``,
        expire: ``,
        cvc: `***`,
    });
}
