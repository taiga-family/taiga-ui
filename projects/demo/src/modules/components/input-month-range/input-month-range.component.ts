import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiMonthRange} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    tuiProvide,
} from '@taiga-ui/cdk';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';

@Component({
    selector: 'example-tui-input-month-range',
    templateUrl: './input-month-range.template.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputMonthRangeComponent)],
})
export class ExampleTuiInputMonthRangeComponent extends AbstractExampleTuiControl {
    public override cleaner = false;
    public override maxLength = 0;

    public control = new FormControl<TuiMonthRange | null>(null, Validators.required);

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
}
