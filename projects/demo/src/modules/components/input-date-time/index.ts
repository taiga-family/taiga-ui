import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler, TuiTimeMode} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    tuiProvide,
    TuiTime,
} from '@taiga-ui/cdk';
import {
    TuiDropdownOpenDirective,
    TuiHintOptionsDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateTimeModule, TuiNamedDay} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        RouterLink,
        TuiNotificationComponent,
        TuiInputDateTimeModule,
        ReactiveFormsModule,
        TuiDropdownOpenDirective,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    private readonly today = TuiDay.currentLocal();

    protected readonly minVariants: ReadonlyArray<TuiDay | [TuiDay, TuiTime]> = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
        [this.today.append({day: -1}), new TuiTime(12, 20)],
    ];

    protected min: TuiDay | [TuiDay, TuiTime] = this.minVariants[0];

    protected readonly maxVariants: ReadonlyArray<TuiDay | [TuiDay, TuiTime]> = [
        TUI_LAST_DAY,
        new TuiDay(2017, 11, 11),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
        [this.today.append({day: +1}), new TuiTime(16, 20)],
    ];

    protected max: TuiDay | [TuiDay, TuiTime] = this.maxVariants[0];

    protected defaultActiveYearMonthVariants = [
        TuiMonth.currentLocal(),
        new TuiMonth(2020, 2),
        new TuiMonth(2017, 2),
    ];

    protected defaultActiveYearMonth = this.defaultActiveYearMonthVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly itemsVariants = [
        [],
        [new TuiNamedDay(TUI_LAST_DAY.append({year: -1}), 'Until today')],
    ];

    protected items = this.itemsVariants[0];

    protected readonly modeVariants: readonly TuiTimeMode[] = [
        'HH:MM',
        'HH:MM:SS',
        'HH:MM:SS.MSS',
    ];

    protected mode = this.modeVariants[0];

    public override cleaner = false;

    public readonly control = new FormControl<[TuiDay | null, TuiTime | null] | null>(
        null,
        Validators.required,
    );
}
