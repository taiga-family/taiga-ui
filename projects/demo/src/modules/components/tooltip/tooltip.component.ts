import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDirection, TuiHintModeT} from '@taiga-ui/core';

@Component({
    selector: `example-tooltip`,
    templateUrl: `./tooltip.template.html`,
    changeDetection,
})
export class ExampleTuiTooltipComponent {
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
    };

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly modeVariants: readonly TuiHintModeT[] = [`error`];

    mode: TuiHintModeT | null = null;

    directionVariants: readonly TuiDirection[] = [
        `left`,
        `right`,
        `bottom-left`,
        `bottom-right`,
        `bottom-middle`,
        `top-left`,
        `top-right`,
        `top-middle`,
    ];

    direction: TuiDirection = this.directionVariants[2];

    describeId = ``;

    showDelay = 500;

    hideDelay = 200;
}
