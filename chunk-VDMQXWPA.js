import"./chunk-HU6DUUP4.js";var a=`import {I18nPluralPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {CHAR_ZERO_WIDTH_SPACE} from '@taiga-ui/cdk';
import {tuiInputNumberOptionsProvider, TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            minusSign: CHAR_ZERO_WIDTH_SPACE,
            prefix: CHAR_ZERO_WIDTH_SPACE, // Make minus non-erasable
        }),
    ],
})
export default class Example {
    protected value = [-30, 0];

    // See https://angular.dev/api/common/I18nPluralPipe#example
    protected readonly pluralize = {
        '=-1': ' day ago',
        other: ' days ago',
    };
}
`;export{a as default};
