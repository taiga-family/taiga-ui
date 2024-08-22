import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
// Note: depends on your method of importing static assets
// https://github.com/tc39/proposal-import-attributes
import euro from '@taiga-ui/icons/src/badge-euro.svg?raw';
import ruble from '@taiga-ui/icons/src/badge-russian-ruble.svg?raw';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiDocCode],
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconsProvider({
            '@tui.badge-euro': euro,
            '@tui.badge-russian-ruble': ruble,
        }),
    ],
})
export default class Example {
    protected readonly server = import('./server.md?raw');
}
