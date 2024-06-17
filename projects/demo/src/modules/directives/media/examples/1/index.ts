import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHighDpiDirective, TuiMediaDirective} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiMediaDirective, TuiHighDpiDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected volume = 1;
    protected paused = true;
}
