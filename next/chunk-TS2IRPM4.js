import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {dir: 'rtl'},
})
export default class Example {
    protected value = [
        '\u062D\u0628\u064A\u0628\u064A',
        '\u0635\u0628\u0627\u062D \u0627\u0644\u062E\u064A\u0631',
        '\u0645\u0646 \u0641\u0636\u0644\u0643',
        '\u0634\u0643\u0631\u0627',
        '\u0623\u0646\u0627 \u0622\u0633\u0641',
        '\u062A\u0635\u0628\u062D \u0639\u0644\u0649 \u062E\u064A\u0631',
    ];
}
`;export{o as default};
