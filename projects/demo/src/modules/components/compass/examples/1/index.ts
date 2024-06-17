import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCompassComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCompassComponent],
    template: '<tui-compass></tui-compass>',
    encapsulation,
    changeDetection,
})
export default class Example {}
