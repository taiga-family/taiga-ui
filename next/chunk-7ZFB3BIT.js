import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike, tuiLikeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: center; }',
    encapsulation,
    changeDetection,
    providers: [
        tuiLikeOptionsProvider({
            icons: {
                unchecked:
                    'https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg',
                checked: '/assets/icons/github.svg',
            },
        }),
    ],
})
export default class Example {}
`;export{i as default};
