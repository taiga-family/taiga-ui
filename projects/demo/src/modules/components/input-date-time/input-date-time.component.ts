import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiAutofillFieldName,
    TuiBooleanHandler,
    TuiDay,
    TuiMonth,
    TuiTime,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {TuiNamedDay} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-date-time',
    templateUrl: './input-date-time.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputDateTimeComponent),
        },
    ],
})
export class ExampleTuiInputDateTimeComponent extends AbstractExampleTuiControl {
    private readonly today = TuiDay.currentLocal();

    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        'value-transformer.ts': import('!!raw-loader!./examples/4/value-transformer.ts'),
    };

    readonly minVariants: ReadonlyArray<TuiDay | [TuiDay, TuiTime]> = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
        [this.today.append({day: -1}), new TuiTime(12, 20)],
    ];

    min: TuiDay | [TuiDay, TuiTime] = this.minVariants[0];

    readonly maxVariants: ReadonlyArray<TuiDay | [TuiDay, TuiTime]> = [
        TUI_LAST_DAY,
        new TuiDay(2017, 11, 11),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
        [this.today.append({day: +1}), new TuiTime(16, 20)],
    ];

    max: TuiDay | [TuiDay, TuiTime] = this.maxVariants[0];

    defaultActiveYearMonthVariants = [
        TuiMonth.currentLocal(),
        new TuiMonth(2020, 2),
        new TuiMonth(2017, 2),
    ];

    defaultActiveYearMonth = this.defaultActiveYearMonthVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly itemsVariants = [
        [],
        [new TuiNamedDay(TUI_LAST_DAY.append({year: -1}), 'Unill today')],
    ];

    items = this.itemsVariants[0];

    readonly autocompleteVariants: TuiAutofillFieldName[] = ['off', 'bday'];

    autocomplete: TuiAutofillFieldName | '' = '';

    cleaner = false;

    readonly control = new FormControl(null, Validators.required);

    readonly modeVariants: readonly TuiTimeMode[] = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];

    mode = this.modeVariants[0];
}
