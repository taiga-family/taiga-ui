import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';

@Component({
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            text: 'Home',
            icon: '@tui.home',
        },
        {
            text: 'Photos',
            icon: '@tui.image',
        },
        {
            text: 'Navigation',
            icon: '@tui.map-pin',
        },
    ];
}
`;export{o as default};
