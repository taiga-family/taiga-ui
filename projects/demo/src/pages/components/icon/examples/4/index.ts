import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
import heart from '@taiga-ui/icons/src/heart.svg';
import mastercard from '@taiga-ui/icons/src/mastercard.svg';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        tuiIconsProvider({
            '@tui.heart': heart,
            '@img.mastercard': mastercard,
        }),
    ],
})
export default class Example {}
