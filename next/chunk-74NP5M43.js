import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiNotification, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiChevron,
        TuiDataListWrapper,
        TuiNotification,
        TuiSelect,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.eye',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: '@tui.mail',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0]!;
}
`;export{i as default};
