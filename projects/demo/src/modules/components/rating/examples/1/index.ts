import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiRatingComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiRatingComponent, TuiLabelModule, FormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = 0;
}
