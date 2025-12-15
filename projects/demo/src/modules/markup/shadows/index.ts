import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiCard, TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {}
