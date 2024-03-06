import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {
    TuiBooleanHandler,
    TuiContext,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TUI_DEFAULT_STRINGIFY,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

class Account {
    constructor(
        public readonly name: string,
        public readonly balance: number,
    ) {}

    protected toString(): string {
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
        tuiDocExcludeProperties([
            'tuiTextfieldPrefix',
            'tuiTextfieldPostfix',
            'tuiTextfieldFiller',
            'tuiTextfieldCustomContent',
        ]),
    ],
})
export class ExampleTuiMultiSelectComponent extends AbstractExampleTuiControl {
    public control = new FormControl<Account[] | null>(null);

    public override iconLeft = '';

    public override readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [
        's',
        'm',
        'l',
    ];

    public override size: TuiSizeL | TuiSizeS =
        this.sizeVariants[this.sizeVariants.length - 1];

    public override readonly maxLengthVariants: readonly number[] = [10];

    public override maxLength = null;

    public override labelOutside = true;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    protected readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
        LESS: import('./examples/7/index.less?raw'),
    };

    protected readonly example8: TuiDocExample = {
        TypeScript: import('./examples/8/index.ts?raw'),
        HTML: import('./examples/8/index.html?raw'),
    };

    protected readonly example9: TuiDocExample = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
    };

    protected readonly example10: TuiDocExample = {
        TypeScript: import('./examples/10/index.ts?raw'),
        HTML: import('./examples/10/index.html?raw'),
    };

    protected readonly example11: TuiDocExample = {
        TypeScript: import('./examples/11/index.ts?raw'),
        HTML: import('./examples/11/index.html?raw'),
    };

    protected readonly items = [
        new Account('Ruble', 500),
        new Account('Dollar', 500),
        new Account('Euro', 500),
        new Account('Pounds', 500),
        new Account('Yuan', 237),
    ];

    protected rows = 100;

    protected editable = true;

    protected search: string | null = '';

    protected readonly iconVariants = [
        '',
        'tuiIconSearchLarge',
        'tuiIconPieChartLarge',
        'tuiIconCreditCardLarge',
    ];

    protected stringifyVariants: Array<TuiStringHandler<Account | string>> = [
        TUI_DEFAULT_STRINGIFY,
        item => String(String(item).match(/\d+/)),
    ];

    protected stringify = this.stringifyVariants[0];

    protected identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    protected identityMatcher = this.identityMatcherVariants[0];

    protected tagValidatorVariants: ReadonlyArray<TuiBooleanHandler<Account>> = [
        ALWAYS_TRUE_HANDLER,
        item => item.balance > 300,
        item => !item.name.startsWith('Pounds'),
    ];

    protected tagValidator = this.tagValidatorVariants[0];

    protected readonly valueContentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContext<readonly Account[]>>
    > = ['', ({$implicit: {length}}) => `Selected: ${length}`];

    protected valueContent = this.valueContentVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<Account>
    > = [ALWAYS_FALSE_HANDLER, (item: Account) => item.balance < 300];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected setValue(): void {
        this.control.setValue([new Account('Dollar', 237)]);
    }
}
