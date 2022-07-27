import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TuiBooleanHandler,
} from '@taiga-ui/cdk';
import {TuiOrientation, TuiSizeL} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

interface ItemRadio {
    name: string;
    description: string;
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
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly exampleForm = import('./examples/import/declare-form.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly orientationVariants: readonly TuiOrientation[] = ['vertical', 'horizontal'];
    orientation: TuiOrientation = this.orientationVariants[0];

    readonly items: readonly ItemRadio[] = [
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

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    readonly disabledItemHandlerVariants: Array<TuiBooleanHandler<ItemRadio>> = [
        ALWAYS_FALSE_HANDLER,
        ALWAYS_TRUE_HANDLER,
        item => item.name === 'Advanced',
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    control = new FormControl(this.items[0]);
}
