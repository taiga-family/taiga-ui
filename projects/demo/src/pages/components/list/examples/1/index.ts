import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
