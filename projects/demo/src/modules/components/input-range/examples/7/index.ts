import {I18nPluralPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputNumberOptionsProvider, TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            valueTransformer: {
                fromControlValue(value: number | null): number | null {
                    return value && Math.abs(value);
                },
                toControlValue(value: number | null): number | null {
                    return value && -1 * Math.abs(value);
                },
            },
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
