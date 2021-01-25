import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Scss from '!!raw-loader!./examples/3/index.scss';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component, forwardRef} from '@angular/core';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {changeDetection} from '../../../change-detection-strategy';
import {LogService} from '../../app/log.service';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-hosted-dropdown',
    templateUrl: './hosted-dropdown.template.html',
    styleUrls: ['./hosted-dropdown.style.scss'],
    changeDetection,
    providers: [
        LogService,
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
        SCSS: example1Scss,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        SCSS: example3Scss,
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
