import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiHint} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIslandModule, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {}
