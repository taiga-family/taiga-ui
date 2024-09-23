import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike, tuiLikeOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLikeOptionsProvider({
            icons: {
                unchecked:
                    'https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg',
                checked: 'https://cdn-icons-png.flaticon.com/64/12710/12710759.png',
            },
        }),
    ],
})
export default class Example {}
