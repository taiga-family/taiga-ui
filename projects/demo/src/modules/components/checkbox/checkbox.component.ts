import {Component, forwardRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiSizeL} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-checkbox',
    templateUrl: './checkbox.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiCheckboxComponent),
        },
    ],
})
export class ExampleTuiCheckboxComponent extends AbstractExampleTuiControl {
    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    public override size: TuiSizeL = this.sizeVariants[0];

    public readonly control = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl<boolean | null>(null),
        testValue3: new FormControl(true),
    });

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleOptions = import('./examples/import/define-options.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };
}
