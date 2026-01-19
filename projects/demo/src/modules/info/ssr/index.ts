import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiHeader} from '@taiga-ui/layout';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {}
