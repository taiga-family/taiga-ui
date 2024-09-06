import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {StylesInfo} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [StylesInfo, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {}
