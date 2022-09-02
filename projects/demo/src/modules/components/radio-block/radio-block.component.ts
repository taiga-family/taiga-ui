import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiHorizontalDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-radio-block`,
    templateUrl: `./radio-block.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioBlockComponent),
        },
    ],
})
export class ExampleTuiRadioBlockComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

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

    readonly contentAlignVariants: readonly TuiHorizontalDirection[] = [`left`, `right`];

    contentAlign: TuiHorizontalDirection = this.contentAlignVariants[1];

    hideRadio = false;

    override readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = [`s`, `m`, `l`];

    override size: TuiSizeS | TuiSizeL = this.sizeVariants[2];

    pseudoDisabled = false;

    readonly control = new FormControl(`orange`);

    override get disabled(): boolean {
        return this.control.disabled;
    }

    override set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
