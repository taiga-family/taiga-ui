import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-hosted-dropdown',
    templateUrl: './hosted-dropdown.template.html',
    styleUrls: ['./hosted-dropdown.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiHostedDropdownComponent),
        },
    ],
})
export class ExampleTuiHostedDropdownComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
    };

    minHeight = DEFAULT_MIN_HEIGHT;

    maxHeight = DEFAULT_MAX_HEIGHT;

    alignVariants: readonly TuiHorizontalDirection[] = ['right', 'left'];

    align = this.alignVariants[0];

    readonly directionVariants: ReadonlyArray<TuiVerticalDirection | null> = [
        null,
        'top',
        'bottom',
    ];

    direction: TuiVerticalDirection | null = this.directionVariants[0];

    readonly limitWidthVariants: readonly TuiDropdownWidthT[] = ['auto', 'fixed', 'min'];

    limitWidth: TuiDropdownWidthT = this.limitWidthVariants[0];

    open = false;

    input = '';

    canOpenVariants = [true, 'getter this.input.length > 2'];

    canOpenSelected = this.canOpenVariants[0];

    readonly contentVariants = ['Template', 'Custom string'];

    content = this.contentVariants[0];

    get template(): boolean {
        return this.content === 'Template';
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
