import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {StylesInfoComponent} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [TuiDemo, StylesInfoComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {}
