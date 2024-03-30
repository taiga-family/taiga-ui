import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiTimeMode} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    TuiTime,
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

    public override cleaner = false;

    public readonly control = new FormControl<[TuiDay | null, TuiTime | null] | null>(
        null,
        Validators.required,
    );

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        'value-transformer.ts': import('./examples/4/value-transformer.ts?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

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
}
