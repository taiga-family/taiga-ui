import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActionModule, TuiMarkerIconModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-action-example-4',
    imports: [TuiActionModule, TuiMarkerIconModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiActionExample4 {}
