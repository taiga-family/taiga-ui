import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiPinComponent} from '@taiga-ui/kit';

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
