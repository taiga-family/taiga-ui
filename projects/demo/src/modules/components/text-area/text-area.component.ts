import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiSizeL, TuiSizeM} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-text-area`,
    templateUrl: `./text-area.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiTextAreaComponent),
        },
    ],
})
export class ExampleTuiTextAreaComponent extends AbstractExampleTuiControl {
    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`./examples/6/index.ts?raw`),
        HTML: import(`./examples/6/index.html?raw`),
        LESS: import(`./examples/6/index.less?raw`),
    };

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    override readonly maxLengthVariants: readonly number[] = [50, 100, 500];

    override maxLength: number | null = null;

    readonly rowsVariants: readonly number[] = [8, 15, 30];

    rows: number = this.rowsVariants[0];

    expandable = false;

    control = new FormControl();

    override readonly sizeVariants: ReadonlyArray<TuiSizeM | TuiSizeL> = [`m`, `l`];

    override size: TuiSizeM | TuiSizeL = this.sizeVariants[1];
}
