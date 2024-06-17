import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiHint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {}
