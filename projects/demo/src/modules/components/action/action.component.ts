import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-action`,
    templateUrl: `./action.template.html`,
    changeDetection,
    encapsulation,
})
export class ExampleTuiActionComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        HTML: import(`./examples/2/index.html?raw`),
        TypeScript: import(`./examples/2/index.ts?raw`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
        TypeScript: import(`./examples/3/index.ts?raw`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
        TypeScript: import(`./examples/4/index.ts?raw`),
    };

    readonly example5: TuiDocExample = {
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
        TypeScript: import(`./examples/5/index.ts?raw`),
    };

    readonly iconVariants = [
        `tuiIconPrintLarge`,
        `tuiIconLoginLarge`,
        `tuiIconCalendarLarge`,
    ];

    icon = this.iconVariants[0];

    color = `var(--tui-link)`;
    background = `var(--tui-base-02)`;
}
