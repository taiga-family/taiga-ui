import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiDropdownPortalDirective,
    TuiLabel,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

import TuiTabBarExample from './examples/1';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiCheckboxComponent,
        TuiLabel,
        TuiTabBarExample,
        FormsModule,
        TuiDropdownPortalDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected fixed = false;
}
