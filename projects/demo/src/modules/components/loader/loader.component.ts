import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `example-tui-loader`,
    templateUrl: `./loader.template.html`,
    styleUrls: [`./loader.style.less`],
    changeDetection,
})
export class ExampleTuiLoaderComponent {
    @ViewChild(`textTemplate`)
    readonly textTemplate: PolymorpheusContent = ``;

    readonly exampleOptions = import(`!!raw-loader!./examples/import/define-options.md`);
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
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
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
