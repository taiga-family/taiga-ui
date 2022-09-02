import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiControl} from '../abstract/control';

@Component({
    selector: `example-tui-input-inline`,
    templateUrl: `./input-inline.template.html`,
    styleUrls: [`./input-inline.style.less`],
})
export class ExampleTuiInputInlineComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/component.ts?raw`),
        HTML: import(`./examples/1/template.html?raw`),
        LESS: import(`./examples/1/style.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/component.ts?raw`),
        HTML: import(`./examples/2/template.html?raw`),
        LESS: import(`./examples/2/style.less?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/component.ts?raw`),
        HTML: import(`./examples/3/template.html?raw`),
        LESS: import(`./examples/3/style.less?raw`),
    };

    control = new FormControl(`111`, Validators.required);

    override readonly maxLengthVariants: readonly number[] = [10];

    override maxLength: number | null = null;
}
