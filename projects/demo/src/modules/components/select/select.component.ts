import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    selector: `example-tui-select`,
    templateUrl: `./select.template.html`,
    styleUrls: [`./select.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiSelectComponent),
        },
    ],
})
export class ExampleTuiSelectComponent extends AbstractExampleTuiControl {
    @ViewChild(`valueTemplateContent`)
    private readonly valueTemplateRef: PolymorpheusContent<
        TuiValueContentContext<Account>
    > = ``;

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`./examples/6/index.ts?raw`),
        HTML: import(`./examples/6/index.html?raw`),
        LESS: import(`./examples/6/index.less?raw`),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`./examples/7/index.ts?raw`),
        HTML: import(`./examples/7/index.html?raw`),
        LESS: import(`./examples/7/index.less?raw`),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import(`./examples/8/index.ts?raw`),
        HTML: import(`./examples/8/index.html?raw`),
        LESS: import(`./examples/8/index.less?raw`),
    };

    readonly example9: TuiDocExample = {
        TypeScript: import(`./examples/9/index.ts?raw`),
        HTML: import(`./examples/9/index.html?raw`),
        LESS: import(`./examples/9/index.less?raw`),
        './account/my-account.component.ts': import(
            `./examples/9/account/my-account.component.ts?raw`
        ),
        './account/my-account.component.less': import(
            `./examples/9/account/my-account.component.less?raw`
        ),
        './account/my-account.component.html': import(
            `./examples/9/account/my-account.component.html?raw`
        ),
    };

    readonly example10: TuiDocExample = {
        TypeScript: import(`./examples/10/index.ts?raw`),
        HTML: import(`./examples/10/index.html?raw`),
    };

    readonly items = [new Account(`Ruble`, 500), new Account(`Dollar`, 237)];

    readonly valueTemplateVariants = [``, `Template`];

    readonly iconVariants = [``, `tuiIconPiechartLarge`, `tuiIconCardsLarge`];

    override iconLeft = this.iconVariants[0];

    selectedValueTemplate = this.valueTemplateVariants[0];

    readonly identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    identityMatcher = this.identityMatcherVariants[0];

    control = new FormControl(null, Validators.required);

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<Account>> = [
        ALWAYS_FALSE_HANDLER,
        (item: Account) => item.balance < 300,
    ];

    get valueContent(): PolymorpheusContent<TuiValueContentContext<Account>> {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : ``;
    }

    setValue(): void {
        this.control.setValue(new Account(`Dollar`, 237));
    }
}
