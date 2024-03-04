import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCard} from '@taiga-ui/addon-commerce';

@Component({
    selector: 'tui-input-card-grouped-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputCardGroupedExample4 {
    protected control = new FormControl<TuiCard | null>({
        card: '',
        expire: '',
        cvc: '***',
    });
}
