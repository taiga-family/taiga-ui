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
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
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
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/6/index.ts'),
        HTML: import('!!raw-loader!./examples/6/index.html'),
        LESS: import('!!raw-loader!./examples/6/index.less'),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/7/index.ts'),
        HTML: import('!!raw-loader!./examples/7/index.html'),
        LESS: import('!!raw-loader!./examples/7/index.less'),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/8/index.ts'),
        HTML: import('!!raw-loader!./examples/8/index.html'),
    };

    readonly example9: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/9/index.ts'),
        HTML: import('!!raw-loader!./examples/9/index.html'),
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
