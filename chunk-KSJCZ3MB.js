import"./chunk-B4AJQJMI.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLabel, TuiPopup} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

import TuiTabBarExample from './examples/1';

@Component({
    imports: [FormsModule, TuiCheckbox, TuiDemo, TuiLabel, TuiPopup, TuiTabBarExample],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected fixed = false;
}
`;export{i as default};
