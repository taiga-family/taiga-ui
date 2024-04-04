import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    tuiProvide,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-date-multi',
    templateUrl: './input-date-multi.template.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputDateMultiComponent)],
})
export class ExampleTuiInputDateMultiComponent extends AbstractExampleTuiControl {
    public control = new FormControl<TuiDay[]>([], Validators.required);

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
    ];

    protected min = this.minVariants[0];

    protected maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2017, 11, 11),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0];

    protected rowsVariants = [Infinity, 10, 3, 2];

    protected rows = this.rowsVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) =>
            day.day % 2 === 0
                ? ['var(--tui-primary)', 'var(--tui-info-fill)']
                : ['var(--tui-success-fill)'],
    ];

    protected markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];
}
