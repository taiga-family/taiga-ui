import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `spaces`,
    templateUrl: `spaces.template.html`,
    changeDetection,
})
export class SpacesComponent {
    readonly exampleBasicImportsLess = import(
        `!!raw-loader!./examples/import/basic-imports-less.md`
    );

    readonly exampleIndexLess = import(`!!raw-loader!./examples/import/index-less.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.style.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.style.less`),
    };
}
