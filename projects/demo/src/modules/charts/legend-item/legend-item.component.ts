import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `example-tui-legend-item`,
    templateUrl: `./legend-item.template.html`,
    changeDetection,
})
export class ExampleTuiLegendItemComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

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

    text = `Text inside`;

    active = false;

    readonly sizeVariants: readonly TuiSizeS[] = [`s`, `m`];

    readonly colorVariants: readonly string[] = [
        `var(--tui-support-04)`,
        `var(--tui-primary)`,
        `var(--tui-secondary)`,
    ];

    size = this.sizeVariants[0];

    disabled = false;

    color = ``;
}
