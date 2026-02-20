import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiObfuscateOptionsProvider, TuiObfuscatePipe} from '@taiga-ui/cdk';

@Component({
    imports: [TuiObfuscatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiObfuscateOptionsProvider({
            recipes: {
                city: ({length}) => 'x'.repeat(length),
                phone: ({length}) => '*'.repeat(length),
            },
        }),
    ],
})
export default class Example {}
`;export{o as default};
