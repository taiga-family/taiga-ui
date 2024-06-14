import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo, TuiSetup} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiSetup],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {}
