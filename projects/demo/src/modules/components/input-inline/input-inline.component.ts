import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiControl} from '../abstract/control';

@Component({
    selector: `example-tui-input-inline`,
    templateUrl: `./input-inline.template.html`,
    styleUrls: [`./input-inline.style.less`],
})
export class ExampleTuiInputInlineComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/component.ts`),
        HTML: import(`!!raw-loader!./examples/1/template.html`),
        LESS: import(`!!raw-loader!./examples/1/style.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/component.ts`),
        HTML: import(`!!raw-loader!./examples/2/template.html`),
        LESS: import(`!!raw-loader!./examples/2/style.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/component.ts`),
        HTML: import(`!!raw-loader!./examples/3/template.html`),
        LESS: import(`!!raw-loader!./examples/3/style.less`),
    };

    control = new FormControl(`111`, Validators.required);

    readonly maxLengthVariants: readonly number[] = [10];

    maxLength: number | null = null;
}
