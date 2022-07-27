import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-math`,
    templateUrl: `./math.template.html`,
    changeDetection,
})
export class ExampleMathComponent {
    readonly importComponentExample = import(
        `!!raw-loader!./examples/import/import-component.md`
    );

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
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };
}
