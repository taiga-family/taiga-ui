import {Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `example-progress-segmented`,
    templateUrl: `./progress-segmented.template.html`,
    styleUrls: [`./progress-segmented.style.less`],
})
export class ExampleProgressSegmentedComponent {
    value = 3;
    max = 5;

    readonly sizeVariants: readonly TuiSizeS[] = [`m`, `s`];
    size: TuiSizeS = this.sizeVariants[0];

    readonly colorVariants: ReadonlyArray<string[] | string> = [
        `var(--tui-primary)`,
        `lightskyblue`,
        `#3682db`,
        `rgba(74, 201, 155, 1)`,
        new Array(this.max)
            .fill(``)
            .map((_, index) => `var(--tui-support-0${index + 1})`),
    ];

    color = this.colorVariants[0];

    readonly basicExample: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly sizesExample: TuiDocExample = {
        HTML: import(`./examples/2/index.html?raw`),
        TypeScript: import(`./examples/2/index.ts?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly colorsExample: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
        TypeScript: import(`./examples/3/index.ts?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly labelsExample: TuiDocExample = {
        HTML: import(`./examples/4/index.html?raw`),
        TypeScript: import(`./examples/4/index.ts?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
}
