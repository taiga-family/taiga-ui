import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiYear} from '@taiga-ui/cdk';
import {tuiInputInputYearOptionsProvider, TuiInputYear} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputYear],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputInputYearOptionsProvider({
            valueTransformer: {
                fromControlValue: (date: TuiYear | null): number | null =>
                    date?.year ?? null,
                toControlValue: (year: number | null): TuiYear | null =>
                    typeof year === 'number' ? new TuiYear(year) : null,
            },
        }),
    ],
})
export default class Example {
    protected value: TuiYear | null = new TuiYear(new Date().getFullYear());
}
`;export{t as default};
