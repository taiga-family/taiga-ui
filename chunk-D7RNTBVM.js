import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
import heart from '@taiga-ui/icons/src/heart.svg';
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
`;export{t as default};
