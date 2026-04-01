import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiFluidTypography} from '@taiga-ui/kit';

const WORDS = ['Rock', 'Paper', 'Scissor'];

@Component({
    imports: [TuiButton, TuiFluidTypography],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected text = 'There is some text in here';

    protected randomize(): void {
        this.text = Array.from(
            {length: Math.ceil(10 * Math.random())},
            () => WORDS[Math.floor(Math.random() * WORDS.length)],
        ).join(', ');
    }
}
`;export{o as default};
