import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler, TuiMonthRange} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    tuiProvide,
} from '@taiga-ui/cdk';
import {TuiHint, TuiNotificationComponent} from '@taiga-ui/core';
import {TuiInputMonthRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiInputMonthRangeModule,
        ReactiveFormsModule,
        TuiHint,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiMonth(2019, 2),
        new TuiMonth(2007, 0),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
    ];

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2017, 2),
        new TuiMonth(2020, 2),
        new TuiMonth(2023, 0),
    ];

    protected min = this.minVariants[0];
    protected max = this.maxVariants[0];
    protected minLength = 0;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiMonth>
    > = [TUI_FALSE_HANDLER, ({month}) => month % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    public override cleaner = false;
    public override maxLength = 0;

    public control = new FormControl<TuiMonthRange | null>(null, Validators.required);
}
