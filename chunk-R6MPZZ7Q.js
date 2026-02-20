import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, TuiMonth, TuiYear} from '@taiga-ui/cdk';
import {TuiInputMonth} from '@taiga-ui/kit';

const NEXT_YEAR = TuiMonth.currentLocal().year + 1;

@Component({
    imports: [FormsModule, TuiInputMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = TuiMonth.currentLocal().append({month: 1});
    protected readonly max = new TuiMonth(NEXT_YEAR, 11);
    protected value: TuiMonth | null = null;
    protected activeYear = new TuiYear(NEXT_YEAR);

    protected readonly isSummerHandler: TuiBooleanHandler<TuiMonth> = ({month}) =>
        [5, 6, 7].includes(month);
}
`;export{t as default};
