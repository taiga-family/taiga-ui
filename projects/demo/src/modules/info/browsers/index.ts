import {NgFor, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDocPageModule, NgFor, NgIf, TuiNotificationModule, TuiLinkDirective],
    templateUrl: './index.html',
    styles: ['td {width: 18.75rem}'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageComponent {
    protected readonly desktopBrowsers = [
        {name: 'Google Chrome', version: '88+'},
        {name: 'Mozilla Firefox', version: '120+'},
        {name: 'Safari', version: '13.1+'},
        {name: 'Opera', version: '74+'},
        {name: 'Edge', version: '88+'},
        {name: 'Yandex Browser', version: '21.2+'},
        {name: 'Microsoft Internet Explorer', version: null},
    ] as const;

    protected readonly mobileBrowsers = [
        {name: 'Google Chrome', version: '88+'},
        {name: 'Mozilla Firefox', version: '120+'},
        {name: 'Safari', version: '13.4+'},
        {name: 'Opera', version: '63+'},
        {name: 'Samsung Mobile', version: '15+'},
        {name: 'Yandex Browser', version: '21.2+'},
    ];
}
