import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {}
