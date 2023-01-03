import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-data-list-wrapper-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDataListWrapperExample3 {
    readonly control = new FormControl();

    readonly items = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    labels = ['Salad', 'Soup'];
}
