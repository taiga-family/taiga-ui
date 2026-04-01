import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRange, tuiInputDateRangeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateRangeOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: string): TuiDayRange | null =>
                    value ? TuiDayRange.normalizeParse(value) : null,
                toControlValue: (value: TuiDayRange | null): string =>
                    value?.toString() || '',
            },
        }),
    ],
})
export default class Example {
    protected value = '';
}
`;export{t as default};
