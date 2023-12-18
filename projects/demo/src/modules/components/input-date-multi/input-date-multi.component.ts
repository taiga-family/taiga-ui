import {Component, forwardRef} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER, TuiMarkerHandler} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-date-multi',
    templateUrl: './input-date-multi.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputDateMultiComponent),
        },
    ],
})
export class ExampleTuiInputDateMultiComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import('./examples/import/declare-form.md?raw');
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
    ];

    min = this.minVariants[0];

    maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2017, 11, 11),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    max = this.maxVariants[0];

    rowsVariants = [Infinity, 10, 3, 2];

    rows = this.rowsVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) =>
            day.day % 2 === 0
                ? ['var(--tui-primary)', 'var(--tui-info-fill)']
                : ['var(--tui-success-fill)'],
    ];

    markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    expandable = false;

    control = new UntypedFormControl([], Validators.required);
}
