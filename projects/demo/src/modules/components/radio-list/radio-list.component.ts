import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import type {TuiOrientation, TuiSizeL} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

interface ItemRadio {
    description: string;
    name: string;
}

@Component({
    selector: 'example-tui-radio-list',
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioListComponent),
        },
    ],
})
export class ExampleTuiRadioListComponent extends AbstractExampleTuiControl {
    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    public override size: TuiSizeL = this.sizeVariants[0];

    public readonly items: readonly ItemRadio[] = [
        {
            name: 'Simple',
            description: 'It is simple',
        },
        {
            name: 'Advanced',
            description: 'For better clients',
        },
        {
            name: 'PRO',
            description: 'For pro and cool clients',
        },
    ];

    public control = new FormControl(this.items[0]);

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly orientationVariants: readonly TuiOrientation[] = [
        'vertical',
        'horizontal',
    ];

    protected orientation: TuiOrientation = this.orientationVariants[0];

    protected readonly disabledItemHandlerVariants: Array<TuiBooleanHandler<ItemRadio>> =
        [TUI_FALSE_HANDLER, TUI_TRUE_HANDLER, item => item.name === 'Advanced'];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];
}
