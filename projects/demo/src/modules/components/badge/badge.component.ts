import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiStatusT} from '@taiga-ui/kit';

@Component({
    selector: `example-badge`,
    templateUrl: `./badge.template.html`,
    changeDetection,
})
export class ExampleTuiBadgeComponent {
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

    readonly statusVariants: readonly TuiStatusT[] = [
        `default`,
        `primary`,
        `custom`,
        `success`,
        `error`,
        `warning`,
        `info`,
        `neutral`,
    ];

    status = this.statusVariants[0];

    values: {[key: string]: string | number} = {
        Taiga: `Taiga`,
        '5': 5,
        '100': 100,
        '"100"': `100`,
        '""': ``,
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeL> = [`xs`, `s`, `m`, `l`];

    size: TuiSizeXS | TuiSizeL = this.sizeVariants[1];

    valueVariants: ReadonlyArray<string | number> = Object.keys(this.values);

    value: string | number = `Taiga`;

    hoverable = false;

    withIcon = false;
}
