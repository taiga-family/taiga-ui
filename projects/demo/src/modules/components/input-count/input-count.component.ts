import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-input-count`,
    templateUrl: `./input-count.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCountComponent),
        },
    ],
})
export class ExampleTuiInputCountComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import(`!!raw-loader!./examples/import/declare-form.md`);
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleOptions = import(`!!raw-loader!./examples/import/define-options.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    min = 0;
    max = 999;

    step = 1;

    stepValues = [1, 2, 3, 4, 5];

    readonly sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    size: TuiSizeL = this.sizeVariants[1];

    hideButtons = false;

    control = new FormControl();

    prefix = ``;

    postfix = ``;
}
