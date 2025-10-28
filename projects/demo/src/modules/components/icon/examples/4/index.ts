import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
// eslint-disable-next-line @taiga-ui/experience-next/no-deep-imports
import heart from '@taiga-ui/icons/src/heart.svg';
// eslint-disable-next-line @taiga-ui/experience-next/no-deep-imports
import search from '@taiga-ui/icons/src/search.svg';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
