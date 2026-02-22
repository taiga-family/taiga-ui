import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiCheckbox, TuiLabel, TuiPopup} from '@taiga-ui/core';

import TuiTabBarExample from './examples/1';

@Component({
    imports: [FormsModule, TuiCheckbox, TuiDemo, TuiLabel, TuiPopup, TuiTabBarExample],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Buttons', 'Links', 'Customization', 'Skeleton'];
    protected fixed = false;
}
