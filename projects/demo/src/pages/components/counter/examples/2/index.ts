import {I18nPluralPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCounter} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, TuiCounter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;

    protected readonly pluralize = {
        '=0': '',
        '=1': ' pc',
        other: ' pcs',
    };
}
