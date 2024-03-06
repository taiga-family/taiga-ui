import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActionModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-action-example-2',
    imports: [TuiActionModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiActionExample2 {}
