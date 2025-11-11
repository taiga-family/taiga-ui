import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiTable} from '@taiga-ui/addon-table';

@Component({
    imports: [TuiDemo, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly desktopBrowsers = [
        {name: 'Google Chrome', version: '88+'},
        {name: 'Mozilla Firefox', version: '121+'},
        {name: 'Safari', version: '14.1+'},
        {name: 'Opera', version: '74+'},
        {name: 'Edge', version: '88+'},
        {name: 'Yandex Browser', version: '21.2+'},
        {name: 'Microsoft Internet Explorer', version: null},
    ] as const;

    protected readonly mobileBrowsers = [
        {name: 'Google Chrome', version: '88+'},
        {name: 'Mozilla Firefox', version: '121+'},
        {name: 'Safari', version: '14.5+'},
        {name: 'Opera', version: '63+'},
        {name: 'Samsung Mobile', version: '15+'},
        {name: 'Yandex Browser', version: '21.2+'},
    ];
}
