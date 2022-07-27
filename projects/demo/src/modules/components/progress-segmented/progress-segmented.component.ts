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

    readonly colorVariants: ReadonlyArray<string | string[]> = [
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
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly sizesExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly colorsExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
    };

    readonly labelsExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
}
