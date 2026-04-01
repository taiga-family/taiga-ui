import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiAvatarOptionsProvider({size: 'l', appearance: 'secondary', round: false}),
    ],
})
export default class Example {}
`;export{a as default};
