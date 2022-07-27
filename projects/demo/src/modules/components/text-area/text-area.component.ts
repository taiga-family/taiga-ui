import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeM} from '@taiga-ui/core';

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
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/6/index.ts`),
        HTML: import(`!!raw-loader!./examples/6/index.html`),
        LESS: import(`!!raw-loader!./examples/6/index.less`),
    };

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleForm = import(`!!raw-loader!./examples/import/declare-form.md`);

    readonly maxLengthVariants: readonly number[] = [50, 100, 500];

    maxLength = null;

    readonly rowsVariants: readonly number[] = [8, 15, 30];

    rows: number = this.rowsVariants[0];

    expandable = false;

    control = new FormControl();

    readonly sizeVariants: ReadonlyArray<TuiSizeM | TuiSizeL> = [`m`, `l`];

    size: TuiSizeM | TuiSizeL = this.sizeVariants[1];
}
