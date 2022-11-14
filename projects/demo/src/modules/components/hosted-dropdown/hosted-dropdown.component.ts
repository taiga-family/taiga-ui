import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiDropdown} from '../abstract/dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-hosted-dropdown`,
    templateUrl: `./hosted-dropdown.template.html`,
    styleUrls: [`./hosted-dropdown.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiHostedDropdownComponent),
        },
    ],
})
export class ExampleTuiHostedDropdownComponent extends AbstractExampleTuiDropdown {
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
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    open = false;

    sided = false;

    input = ``;

    canOpenVariants = [true, `getter this.input.length > 2`];

    canOpenSelected = this.canOpenVariants[0];

    readonly contentVariants = [`Template`, `Custom string`];

    content = this.contentVariants[0];

    get template(): boolean {
        return this.content === `Template`;
    }

    get canOpen(): boolean {
        return this.canOpenSelected === true || this.input.length > 2;
    }

    onInput(input: string): void {
        this.input = input;
        this.open = this.canOpen;
    }

    onClick(): void {
        this.open = false;
    }
}
