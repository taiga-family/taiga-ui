import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `example-avatar`,
    templateUrl: `./badged-content.template.html`,
    changeDetection,
})
export class ExampleTuiBadgedContentComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        LESS: import(`./examples/2/index.less?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    rounded = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        `xs`,
        `s`,
        `m`,
        `l`,
        `xl`,
        `xxl`,
    ];

    size = this.sizeVariants[2];

    colorTop = ``;

    colorBottom = ``;

    contentTop: PolymorpheusContent = ``;

    contentBottom: PolymorpheusContent = ``;

    readonly contentVariants: PolymorpheusContent[] = [
        ``,
        1,
        5,
        155,
        `tuiIconCheck`,
        `Template`,
        `tuiIconCheckCircleLarge`,
    ];
}
