import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiCheckbox, TuiLabel, TuiPopup} from '@taiga-ui/core';

import TuiTabBarExample from './examples/1';
import TuiTabBarLiquidExample from './examples/5';
import TuiTabBarLiquidFullExample from './examples/6';
import TuiTabBarLiquidAndroidExample from './examples/7';

@Component({
    imports: [
        FormsModule,
        TuiCheckbox,
        TuiDemo,
        TuiLabel,
        TuiPopup,
        TuiTabBarExample,
        TuiTabBarLiquidAndroidExample,
        TuiTabBarLiquidExample,
        TuiTabBarLiquidFullExample,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    host: {class: 'tui-tab-bar-demo'},
})
export default class Page {
    protected readonly examples = [
        'Buttons',
        'Links',
        'Customization',
        'Skeleton',
        'iOS Liquid glass',
        'iOS Liquid glass fullwidth',
        'Android',
    ];

    protected fixed = false;
    protected fixedLiquid = false;
    protected fixedLiquidFull = false;
    protected fixedLiquidAndroid = false;
}
