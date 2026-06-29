import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiTitle],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {}
