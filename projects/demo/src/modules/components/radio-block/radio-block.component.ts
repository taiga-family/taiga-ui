import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiHorizontalDirection, TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-radio-block',
    templateUrl: './radio-block.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioBlockComponent),
        },
    ],
})
export class ExampleTuiRadioBlockComponent extends AbstractExampleTuiControl {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly contentAlignVariants: readonly TuiHorizontalDirection[] = [
        'left',
        'right',
    ];

    protected contentAlign: TuiHorizontalDirection = this.contentAlignVariants[1];

    protected hideRadio = false;

    protected readonly sizes: ReadonlyArray<TuiSizeL | TuiSizeXS> = ['xs', 's', 'm', 'l'];

    protected currentSize = this.sizes[3];

    protected pseudoDisabled = false;

    public readonly control = new FormControl('orange');

    public override get disabled(): boolean {
        return this.control.disabled;
    }

    public override set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
