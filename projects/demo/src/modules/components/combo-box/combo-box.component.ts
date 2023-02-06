import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_STRICT_MATCHER,
    TuiIdentityMatcher,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
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
    selector: 'example-tui-combo-box',
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiComboBoxComponent),
        },
    ],
})
export class ExampleTuiComboBoxComponent extends AbstractExampleTuiControl {
    @ViewChild('valueTemplateContent')
    private readonly valueTemplateRef: PolymorpheusContent<
        TuiValueContentContext<Account>
    > = '';

    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');

    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
        'user.ts': import('!!raw-loader!./examples/2/user'),
        'request.service.ts': import('!!raw-loader!./examples/2/request.service'),
        'database-mock-data.ts': import('!!raw-loader!./examples/2/database-mock-data'),
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
        LESS: import('!!raw-loader!./examples/5/index.less'),
        'index-change.directive.ts': import(
            '!!raw-loader!./examples/5/index-change.directive.ts'
        ),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/6/index.ts'),
        HTML: import('!!raw-loader!./examples/6/index.html'),
    };

    readonly items = [
        new Account('Rubles', 500),
        new Account('Dollars', 237),
        new Account('Netherlands Antillean Guilder and Falkland Islands Pound', 700),
    ];

    strict = true;

    search: string | null = '';

    valueTemplateVariants = ['', 'Template'];

    selectedValueTemplate = '';

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
            : '';
    }

    @tuiPure
    filter(query: string | null): readonly Account[] {
        return this.items.filter(item => TUI_DEFAULT_MATCHER(item, query || ''));
    }

    setValue(): void {
        this.control.setValue(new Account('Dollars', 237));
    }
}
