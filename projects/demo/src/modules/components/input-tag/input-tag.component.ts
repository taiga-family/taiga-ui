import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TuiBooleanHandler,
} from '@taiga-ui/cdk';
import {TuiHorizontalDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiStringifiableItem} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-input-tag',
    templateUrl: './input-tag.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputTagComponent),
        },
    ],
})
export class ExampleTuiInputTagComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
        LESS: import('!!raw-loader!./examples/5/index.less'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/6/index.ts'),
        HTML: import('!!raw-loader!./examples/6/index.html'),
        LESS: import('!!raw-loader!./examples/6/index.less'),
    };

    readonly control = new FormControl(
        ['John Cleese', 'Eric Idle', 'Michael Palin'],
        Validators.required,
    );

    editable = true;

    expandable = true;

    allowSpaces = true;

    uniqueTags = true;

    readonly separatorVariants = [',', ';', /[\d]/];

    separator = this.separatorVariants[0];

    readonly iconVariants: readonly string[] = ['tuiIconSearchLarge'];

    icon = '';

    readonly iconAlignVariants: readonly TuiHorizontalDirection[] = ['left', 'right'];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    maxLengthVariants: number[] = [10, 20];

    maxLength: number | null = null;

    search = '';

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[this.sizeVariants.length - 1];

    tagValidatorVariants: ReadonlyArray<TuiBooleanHandler<string>> = [
        ALWAYS_TRUE_HANDLER,
        item => item === 'test',
        item => item !== 'mail',
    ];

    tagValidator = this.tagValidatorVariants[0];

    inputHidden = false;

    readonly disabledItemHandlerVariants: Array<
        TuiBooleanHandler<string | TuiStringifiableItem<string>>
    > = [ALWAYS_FALSE_HANDLER, item => String(item)[0] === 'T'];

    disabledItemHandler = this.disabledItemHandlerVariants[0];
}
