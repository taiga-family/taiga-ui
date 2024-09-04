import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
// Note: depends on your method of importing static assets
// https://github.com/tc39/proposal-import-attributes
import heart from '@taiga-ui/icons/src/heart.svg?raw';
import search from '@taiga-ui/icons/src/search.svg?raw';

@Component({
    standalone: true,
    imports: [TuiDocCode, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconsProvider({
            '@tui.heart': heart,
            '@tui.search': search,
        }),
    ],
})
export default class Example {
    protected readonly server = import('./server.md?raw');
}
