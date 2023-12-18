import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-month-range-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample3 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(null),
    });

    readonly disabledItemHandler: TuiBooleanHandlerWithContext<
        TuiMonth,
        TuiMonthContext
    > = (item: TuiMonth, context?: TuiMonthContext) =>
        !!context &&
        !!context.value &&
        context.value instanceof TuiMonthRange &&
        !!context.value.isSingleMonth &&
        item.month < context.value.from.month + 2;
}
