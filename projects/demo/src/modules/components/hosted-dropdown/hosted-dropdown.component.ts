import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
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
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
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

    onInput(input: string) {
        this.input = input;
        this.open = this.canOpen;
    }

    onClick() {
        this.open = false;
    }
}
