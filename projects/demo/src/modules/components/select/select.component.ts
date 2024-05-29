import {Component, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, tuiProvide} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';

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
    selector: 'example-tui-select',
    templateUrl: './select.template.html',
    styleUrls: ['./select.style.less'],
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiSelectComponent),
        tuiDocExcludeProperties(['tuiTextfieldPrefix', 'tuiTextfieldPostfix']),
    ],
})
export class ExampleTuiSelectComponent extends AbstractExampleTuiControl {
    @ViewChild('valueTemplateContent')
    private readonly valueTemplateRef: PolymorpheusContent<
        TuiValueContentContext<Account>
    >;

    public readonly iconVariants = ['', 'tuiIconPieChartLarge', 'tuiIconCreditCardLarge'];

    public override iconLeft = this.iconVariants[0];

    public control = new FormControl<Account | null>(null, Validators.required);

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
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
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
        LESS: import('./examples/8/index.less?raw'),
    };

    protected readonly example9: TuiDocExample = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
        LESS: import('./examples/9/index.less?raw'),
        './account/my-account.component.ts': import(
            './examples/9/account/my-account.component.ts?raw'
        ),
        './account/my-account.component.less': import(
            './examples/9/account/my-account.component.less?raw'
        ),
        './account/my-account.component.html': import(
            './examples/9/account/my-account.component.html?raw'
        ),
    };

    protected readonly example10: TuiDocExample = {
        TypeScript: import('./examples/10/index.ts?raw'),
        HTML: import('./examples/10/index.html?raw'),
    };

    protected readonly example11: TuiDocExample = {
        TypeScript: import('./examples/11/index.ts?raw'),
        HTML: import('./examples/11/index.html?raw'),
    };

    protected readonly items = [new Account('Ruble', 500), new Account('Dollar', 237)];

    protected readonly valueTemplateVariants = ['', 'Template'];

    protected selectedValueTemplate = this.valueTemplateVariants[0];

    protected readonly identityMatcherVariants: ReadonlyArray<
        TuiIdentityMatcher<Account>
    > = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    protected identityMatcher = this.identityMatcherVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<Account>
    > = [TUI_FALSE_HANDLER, (item: Account) => item.balance < 300];

    protected get valueContent(): PolymorpheusContent<TuiValueContentContext<Account>> {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : '';
    }

    protected setValue(): void {
        this.control.setValue(new Account('Dollar', 237));
    }
}
