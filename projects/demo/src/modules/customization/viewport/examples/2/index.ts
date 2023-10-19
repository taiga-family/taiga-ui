import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-viewport-example-2',
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    changeDetection,
    encapsulation,
})
export class TuiViewportExample2 {}
