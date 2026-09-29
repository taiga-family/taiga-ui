import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDropdown, TuiLabel} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

import TuiTabBarExample from './examples/1';
import TuiTabBarLiquidExample from './examples/5';
import TuiTabBarLiquidFullExample from './examples/6';
import TuiTabBarLiquidAndroidExample from './examples/7';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiCheckbox,
        TuiDemo,
        TuiDropdown,
        TuiLabel,
        TuiTabBarExample,
        TuiTabBarLiquidAndroidExample,
        TuiTabBarLiquidExample,
        TuiTabBarLiquidFullExample,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    host: {class: 'tui-tab-bar-demo'},
})
export default class Page {
    protected fixed = false;
    protected fixedLiquid = false;
    protected fixedLiquidFull = false;
    protected fixedLiquidAndroid = false;
}
