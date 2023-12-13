import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-card-grouped-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputCardGroupedExample4 {
    control = new UntypedFormControl({
        card: '',
        expire: '',
        cvc: '***',
    });
}
