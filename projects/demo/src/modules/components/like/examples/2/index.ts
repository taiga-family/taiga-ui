import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike, tuiLikeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLikeOptionsProvider({
            icons: {unchecked: '@tui.star', checked: '@tui.star-filled'},
        }),
    ],
})
export default class Example {}
