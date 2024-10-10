import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon, TuiNotification, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiConnected,
    TuiDataListWrapper,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiCardLarge,
        TuiCell,
        TuiConnected,
        TuiDataListWrapper,
        TuiIcon,
        TuiNotification,
        TuiSelectModule,
        TuiSwitch,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
            subtitle:
                'Allow outgoing unusual call that can change your life in an unusual way',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0]!;

    protected incoming = false;
    protected outgoing = true;
}
