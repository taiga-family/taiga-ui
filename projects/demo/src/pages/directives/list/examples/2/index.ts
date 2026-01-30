import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiList],
    templateUrl: './index.html',
    styleUrl: '../1/index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
