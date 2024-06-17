import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo, TuiSetupComponent} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiSetupComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {}
