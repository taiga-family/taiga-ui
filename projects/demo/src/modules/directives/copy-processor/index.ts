import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo, TuiDocSetup} from '@demo/utils';

@Component({
    imports: [TuiDemo, TuiDocSetup],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {}
