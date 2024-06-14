import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar} from '@taiga-ui/core';
import {TuiTab, TuiTabsHorizontal, TuiTabsVertical} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTabsHorizontal,
        TuiTab,
        TuiInputNumberModule,
        FormsModule,
        TuiScrollbar,
        TuiTabsVertical,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected horizontalActiveIndex = 9;
    protected verticalActiveIndex = 10;
}
