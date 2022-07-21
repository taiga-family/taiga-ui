import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_DEFAULT_STRINGIFY,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiSizeL,
    TuiSizeS,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    selector: 'example-tui-multi-select',
    templateUrl: './multi-select.template.html',
    styleUrls: ['./multi-select.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiMultiSelectComponent),
        },
    ],
})
export class ExampleTuiMultiSelectComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly exampleForm = import('./examples/import/declare-form.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
        LESS: import('./examples/7/index.less?raw'),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import('./examples/8/index.ts?raw'),
        HTML: import('./examples/8/index.html?raw'),
    };

    readonly example9: TuiDocExample = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
    };

    labelOutside = true;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    readonly items = [
        new Account('Ruble', 500),
        new Account('Dollar', 500),
        new Account('Euro', 500),
        new Account('Pounds', 500),
        new Account('Yuan', 237),
    ];

    expandable = true;

    editable = true;

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = ['fixed', 'min'];

    dropdownLimitWidth: TuiDropdownWidthT = this.dropdownLimitWidthVariants[0];

    search: string | null = '';

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    readonly iconVariants = [
        '',
        'tuiIconSearchLarge',
        'tuiIconPiechartLarge',
        'tuiIconCardsLarge',
    ];

    iconLeft = '';

    size: TuiSizeS | TuiSizeL = this.sizeVariants[this.sizeVariants.length - 1];

    stringifyVariants: Array<TuiStringHandler<Account | string>> = [
        TUI_DEFAULT_STRINGIFY,
        item => String(String(item).match(/\d+/)),
    ];

    stringify = this.stringifyVariants[0];

    identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    identityMatcher = this.identityMatcherVariants[0];

    readonly maxLengthVariants: readonly number[] = [10];

    maxLength = null;

    readonly dropdownAlignVariants: readonly TuiHorizontalDirection[] = ['left', 'right'];

    dropdownAlign: TuiHorizontalDirection = this.dropdownAlignVariants[0];

    readonly valueContentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<readonly Account[]>>
    > = ['', ({$implicit: {length}}) => `Selected: ${length}`];

    valueContent = this.valueContentVariants[0];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'top',
        'bottom',
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    itemContentSelected = null;

    itemContentVariants = ['template'];

    control = new FormControl();

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<Account>> = [
        ALWAYS_FALSE_HANDLER,
        (item: Account) => item.balance < 300,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    setValue(): void {
        this.control.setValue([new Account('Dollar', 237)]);
    }
}
