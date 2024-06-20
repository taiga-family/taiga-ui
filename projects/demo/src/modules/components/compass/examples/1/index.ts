import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCompass} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCompass],
    template: '<tui-compass></tui-compass>',
    encapsulation,
    changeDetection,
})
export default class Example {}
