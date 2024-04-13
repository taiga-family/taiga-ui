import {Component} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiPinComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiPinComponent, TuiIconComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected a = true;
    protected b = false;
    protected c = true;
    protected d = false;
}
