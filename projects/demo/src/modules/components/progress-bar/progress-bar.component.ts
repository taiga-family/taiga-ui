import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `example-tui-progress-bar`,
    templateUrl: `./progress-bar.component.html`,
    styleUrls: [`./progress-bar.component.less`],
    changeDetection,
})
export class ExampleProgressBarComponent {
    value = 6;
    max = 10;

    readonly sizeVariants: readonly TuiSizeS[] = [`m`, `s`];
    size: TuiSizeS = this.sizeVariants[0];

    readonly colorVariants: readonly string[] = [
        `var(--tui-primary)`,
        `lightskyblue`,
        `#3682db`,
        `rgba(74, 201, 155, 1)`,
        `linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))`,
    ];

    color = this.colorVariants[0];

    readonly basicExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly multiColorExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly sizesExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
    };

    readonly labelExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    readonly stackedExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
}
