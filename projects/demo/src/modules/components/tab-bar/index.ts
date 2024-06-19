import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDropdown, TuiLabel, TuiNotification} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

import TuiTabBarExample from './examples/1';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotification,
        TuiCheckbox,
        TuiLabel,
        TuiTabBarExample,
        FormsModule,
        TuiDropdown,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected fixed = false;
}
