import {Component} from '@angular/core';
import {TuiCompassComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiCompassComponent],
    template: '<tui-compass></tui-compass>',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
