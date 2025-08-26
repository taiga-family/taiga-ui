import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
import heart from '@taiga-ui/icons/src/heart.svg?raw';
import search from '@taiga-ui/icons/src/search.svg?raw';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconsProvider({
            '@tui.heart': heart,
            '@tui.search': search,
        }),
    ],
})
export default class Example {}
