import"./chunk-B4AJQJMI.js";var r=`import {ChangeDetectionStrategy, Component} from '@angular/core';
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
        {name: 'Google Chrome', version: '107+'},
        {name: 'Mozilla Firefox', version: '128+'},
        {name: 'Safari', version: '14.1+'},
        {name: 'Opera', version: '93+'},
        {name: 'Edge', version: '107+'},
        {name: 'Yandex Browser', version: '23.3+'},
        {name: 'Microsoft Internet Explorer', version: null},
    ] as const;

    protected readonly mobileBrowsers = [
        {name: 'Google Chrome', version: '107+'},
        {name: 'Mozilla Firefox', version: '128+'},
        {name: 'Safari', version: '14.5+'},
        {name: 'Opera', version: '73+'},
        {name: 'Samsung Mobile', version: '21+'},
        {name: 'Yandex Browser', version: '23.3+'},
    ];
}
`;export{r as default};
