import type {TemplateRef} from '@angular/core';
import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: `example-tui-button`,
    templateUrl: `./button.template.html`,
    styleUrls: [`./button.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiButtonComponent),
        },
    ],
})
export class ExampleTuiButtonComponent extends AbstractExampleTuiInteractive {
    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
    };

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleOptions = import(`./examples/import/define-options.md?raw`);

    disabled = false;

    showLoader = false;

    readonly appearanceVariants = [
        `primary`,
        `accent`,
        `secondary`,
        `secondary-destructive`,
        `outline`,
        `mono`,
        `flat`,
        `whiteblock`,
        `whiteblock-active`,
        `icon`,
    ];

    appearance = this.appearanceVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        `xs`,
        `s`,
        `m`,
        `l`,
        `xl`,
    ];

    size: TuiSizeXS | TuiSizeXL = this.sizeVariants[3];

    readonly shapeVariants = [`square`, `rounded`] as const;

    shape: 'square' | 'rounded' | null = null;

    icon: PolymorpheusContent = ``;

    iconRight: PolymorpheusContent = ``;

    iconButton = false;

    @tuiPure
    getContentVariants(
        template: TemplateRef<Record<string, unknown>>,
    ): readonly PolymorpheusContent[] {
        return [``, `tuiIconEyeClosed`, `tuiIconHeartLarge`, template];
    }
}
