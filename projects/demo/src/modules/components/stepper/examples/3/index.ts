import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiStepper, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly steps = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
}
