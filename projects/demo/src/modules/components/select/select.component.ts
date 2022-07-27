import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiValueContentContext} from '@taiga-ui/core';
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

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleForm = import(`!!raw-loader!./examples/import/declare-form.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/6/index.ts`),
        HTML: import(`!!raw-loader!./examples/6/index.html`),
        LESS: import(`!!raw-loader!./examples/6/index.less`),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/7/index.ts`),
        HTML: import(`!!raw-loader!./examples/7/index.html`),
        LESS: import(`!!raw-loader!./examples/7/index.less`),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/8/index.ts`),
        HTML: import(`!!raw-loader!./examples/8/index.html`),
        LESS: import(`!!raw-loader!./examples/8/index.less`),
    };

    readonly example9: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/9/index.ts`),
        HTML: import(`!!raw-loader!./examples/9/index.html`),
        LESS: import(`!!raw-loader!./examples/9/index.less`),
        './account/my-account.component.ts': import(
            `!!raw-loader!./examples/9/account/my-account.component`
        ),
        './account/my-account.component.less': import(
            `!!raw-loader!./examples/9/account/my-account.component.less`
        ),
        './account/my-account.component.html': import(
            `!!raw-loader!./examples/9/account/my-account.component.html`
        ),
    };

    readonly example10: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/10/index.ts`),
        HTML: import(`!!raw-loader!./examples/10/index.html`),
    };

    readonly items = [new Account(`Ruble`, 500), new Account(`Dollar`, 237)];

    readonly valueTemplateVariants = [``, `Template`];

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
