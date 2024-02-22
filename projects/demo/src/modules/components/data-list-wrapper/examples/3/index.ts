import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-data-list-wrapper-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDataListWrapperExample3 {
    protected readonly items = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected labels = ['Salad', 'Soup'];

    public readonly control = new FormControl('');
}
