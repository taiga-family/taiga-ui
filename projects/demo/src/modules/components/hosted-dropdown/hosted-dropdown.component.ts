import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
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
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

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

    minHeight = DEFAULT_MIN_HEIGHT;

    maxHeight = DEFAULT_MAX_HEIGHT;

    alignVariants: ReadonlyArray<TuiHorizontalDirection> = ['right', 'left'];

    align = this.alignVariants[0];

    readonly directionVariants: ReadonlyArray<TuiVerticalDirection | null> = [
        null,
        'top',
        'bottom',
    ];

    direction: TuiVerticalDirection | null = this.directionVariants[0];

    readonly limitWidthVariants: ReadonlyArray<TuiDropdownWidth> = [
        TuiDropdownWidth.Auto,
        TuiDropdownWidth.Fixed,
        TuiDropdownWidth.Min,
    ];

    limitWidth: TuiDropdownWidth | null = this.limitWidthVariants[0];

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
