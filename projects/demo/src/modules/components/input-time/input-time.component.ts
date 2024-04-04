import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, tuiProvide, TuiTime} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-time',
    templateUrl: './input-time.template.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputTimeComponent),
        tuiDocExcludeProperties(['tuiTextfieldFiller']),
    ],
})
export class ExampleTuiInputTimeComponent extends AbstractExampleTuiControl {
    public override cleaner = false;

    public control = new FormControl(TuiTime.currentLocal(), Validators.required);

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly exampleOptions = import('./examples/import/define-options.md?raw');

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
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiTime>
    > = [
        TUI_FALSE_HANDLER,
        (item: TuiTime) => String(item) === '06:00' || item > TuiTime.currentLocal(),
    ];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly itemSizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [
        's',
        'm',
        'l',
    ];

    protected itemSize: TuiSizeL | TuiSizeS = this.itemSizeVariants[1];

    protected readonly itemsVariants: ReadonlyArray<readonly TuiTime[]> = [
        [],
        tuiCreateTimePeriods(),
    ];

    protected items = this.itemsVariants[0];

    protected strict = false;

    protected readonly modeVariants: readonly TuiTimeMode[] = [
        'HH:MM',
        'HH:MM:SS',
        'HH:MM:SS.MSS',
    ];

    protected mode = this.modeVariants[0];
}
