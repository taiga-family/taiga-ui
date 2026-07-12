import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiResizable, TuiResizer} from '@taiga-ui/cdk';

@Component({
    imports: [TuiKeypad, TuiResizable, TuiResizer],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
