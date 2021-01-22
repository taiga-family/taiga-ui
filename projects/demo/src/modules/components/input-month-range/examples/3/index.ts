import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-month-range-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputMonthRangeExample3 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });

    readonly disabledItemHandler: TuiBooleanHandlerWithContext<
        TuiMonth,
        TuiMonthContext
    > = (item: TuiMonth, context?: TuiMonthContext) => {
        return (
            !!context &&
            !!context.value &&
            context.value instanceof TuiMonthRange &&
            !!context.value.isSingleMonth &&
            item.month < context.value.from.month + 2
        );
    };
}
