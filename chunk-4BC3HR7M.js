import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiDropdown, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiCell, TuiDataListWrapper, TuiDropdown, TuiGroup, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.phone',
            toString: () => 'Call now',
        },
        {
            icon: '@tui.star',
            toString: () => 'Add to favorites',
        },
        {
            icon: '@tui.trash',
            toString: () => 'Remove item',
        },
    ];
}
`;export{o as default};
