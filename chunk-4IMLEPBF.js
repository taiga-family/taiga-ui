import"./chunk-HU6DUUP4.js";var a=`import {I18nPluralPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [0, 7];

    // See https://angular.dev/api/common/I18nPluralPipe#example
    protected readonly pluralize = {
        '=1': ' day later',
        other: ' days later',
    };
}
`;export{a as default};
