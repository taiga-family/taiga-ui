import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiAsideItemDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiLink, TuiAsideItemDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected onClick(event: MouseEvent): void {
        console.info('click', event);
    }
}
