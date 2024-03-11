import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppBarModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiLabelModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-app-bar-example-1',
    imports: [TuiAppBarModule, TuiButtonModule, TuiProgressModule, TuiLabelModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAppBarExample1 {}
