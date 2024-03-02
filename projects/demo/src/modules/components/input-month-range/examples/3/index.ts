import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {type TuiBooleanHandlerWithContext, type TuiMonthContext} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-month-range-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample3 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonthRange | null>(null),
    });

    protected readonly disabledItemHandler: TuiBooleanHandlerWithContext<
        TuiMonth,
        TuiMonthContext
    > = (item: TuiMonth, context?: TuiMonthContext) =>
        !!context &&
        !!context.value &&
        context.value instanceof TuiMonthRange &&
        !!context.value.isSingleMonth &&
        item.month < context.value.from.month + 2;
}
