import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `example-tui-loader`,
    templateUrl: `./loader.template.html`,
    styleUrls: [`./loader.style.less`],
    changeDetection,
})
export class ExampleTuiLoaderComponent {
    @ViewChild(`textTemplate`)
    readonly textTemplate: PolymorpheusContent = ``;

    readonly exampleOptions = import(`./examples/import/define-options.md?raw`);
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    showLoader = true;

    inheritColor = false;

    overlay = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        `xs`,
        `s`,
        `m`,
        `l`,
        `xl`,
        `xxl`,
    ];

    size = this.sizeVariants[2];

    selectedTemplate = ``;

    readonly textVariants: string[] = [``, `template`, `string`];

    get template(): PolymorpheusContent {
        switch (this.selectedTemplate) {
            case `template`: {
                return this.textTemplate || ``;
            }
            case `string`: {
                return `string`;
            }
            default: {
                return ``;
            }
        }
    }
}
