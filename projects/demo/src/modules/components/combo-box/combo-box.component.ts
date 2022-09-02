import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiIdentityMatcher, TuiStringHandler, TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_STRICT_MATCHER,
    tuiPure,
} from '@taiga-ui/cdk';
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
    selector: `example-tui-combo-box`,
    templateUrl: `./combo-box.template.html`,
    styleUrls: [`./combo-box.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiComboBoxComponent),
        },
    ],
})
export class ExampleTuiComboBoxComponent extends AbstractExampleTuiControl {
    @ViewChild(`valueTemplateContent`)
    private readonly valueTemplateRef: PolymorpheusContent<
        TuiValueContentContext<Account>
    > = ``;

    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
        'user.ts': import(`./examples/2/user.ts?raw`),
        'request.service.ts': import(`./examples/2/request.service.ts?raw`),
        'database-mock-data.ts': import(`./examples/2/database-mock-data.ts?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
        'index-change.directive.ts': import(`./examples/5/index-change.directive.ts?raw`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`./examples/6/index.ts?raw`),
        HTML: import(`./examples/6/index.html?raw`),
    };

    readonly items = [
        new Account(`Rubles`, 500),
        new Account(`Dollars`, 237),
        new Account(`Netherlands Antillean Guilder and Falkland Islands Pound`, 700),
    ];

    strict = true;

    search: string | null = ``;

    valueTemplateVariants = [``, `Template`];

    selectedValueTemplate = ``;

    readonly iconVariants = [``, `tuiIconPiechartLarge`, `tuiIconCardsLarge`];

    override iconLeft = this.iconVariants[0];

    readonly stringifyVariants: Array<TuiStringHandler<Account | string>> = [
        TUI_DEFAULT_STRINGIFY,
        item => String(String(item).match(/\d+/)),
    ];

    stringify = this.stringifyVariants[0];

    readonly strictMatcherVariants: ReadonlyArray<TuiStringMatcher<Account>> = [
        TUI_STRICT_MATCHER as TuiStringMatcher<Account>,
        (item: Account, search: string, stringify: TuiStringHandler<Account>) =>
            Number.parseInt(stringify(item).match(/\d+/g)![0], 10) ===
            Number.parseInt(search, 10),
    ];

    strictMatcher = this.strictMatcherVariants[0];

    readonly identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    identityMatcher = this.identityMatcherVariants[0];

    readonly control = new FormControl(null, Validators.required);

    get valueContent(): PolymorpheusContent<TuiValueContentContext<Account>> {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : ``;
    }

    @tuiPure
    filter(query: string | null): readonly Account[] {
        return this.items.filter(item => TUI_DEFAULT_MATCHER(item, query || ``));
    }

    setValue(): void {
        this.control.setValue(new Account(`Dollars`, 237));
    }
}
