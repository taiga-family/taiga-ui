import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiIdentityMatcher, TuiStringHandler, TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_STRICT_MATCHER,
    tuiProvide,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TuiDropdown,
    TuiHint,
    TuiIcon,
    TuiNotificationComponent,
    type TuiValueContentContext,
} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

class Account {
    constructor(
        public readonly name: string,
        public readonly balance: number,
    ) {}

    public toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiNotificationComponent,
        TuiDropdown,
        TuiHint,
        TuiTextfieldControllerModule,
        TuiIcon,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleComponent),
        tuiDocExcludeProperties(['tuiTextfieldPrefix', 'tuiTextfieldPostfix']),
    ],
})
export default class ExampleComponent extends AbstractExampleTuiControl {
    @ViewChild('valueTemplateContent')
    private readonly valueTemplateRef: PolymorpheusContent<
        TuiValueContentContext<Account>
    >;

    protected readonly exampleForm = import('./examples/import/form.md?raw');

    protected readonly exampleModule = import('./examples/import/import.md?raw');

    protected readonly exampleHtml = import('./examples/import/template.md?raw');

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
        LESS: import('./examples/2/index.less?raw'),
        'user.ts': import('./examples/2/user.ts?raw'),
        'request.service.ts': import('./examples/2/request.service.ts?raw'),
        'database-mock-data.ts': import('./examples/2/database-mock-data.ts?raw'),
    };

    protected readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
        LESS: import('./examples/5/index.less?raw'),
        'index-change.directive.ts': import('./examples/5/index-change.directive.ts?raw'),
    };

    protected readonly items = [
        new Account('Rubles', 500),
        new Account('Dollars', 237),
        new Account('Netherlands Antillean Guilder and Falkland Islands Pound', 700),
    ];

    protected strict = true;

    protected search: string | null = '';

    protected valueTemplateVariants = ['', 'Template'];

    protected selectedValueTemplate = '';

    protected readonly stringifyVariants: Array<TuiStringHandler<Account | string>> = [
        String,
        item => String(String(item).match(/\d+/)),
    ];

    protected stringify = this.stringifyVariants[0];

    protected readonly strictMatcherVariants: ReadonlyArray<TuiStringMatcher<Account>> = [
        TUI_STRICT_MATCHER as TuiStringMatcher<Account>,
        (item: Account, search: string, stringify: TuiStringHandler<Account>) =>
            Number.parseInt(stringify(item).match(/\d+/g)![0], 10) ===
            Number.parseInt(search, 10),
    ];

    protected strictMatcher = this.strictMatcherVariants[0];

    protected readonly identityMatcherVariants: ReadonlyArray<
        TuiIdentityMatcher<Account>
    > = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    protected identityMatcher = this.identityMatcherVariants[0];

    public readonly control = new FormControl<Account | null>(null, Validators.required);

    public readonly iconVariants = ['', '@tui.pie-chart', '@tui.credit-card'];

    public override iconLeft = this.iconVariants[0];

    protected get valueContent(): PolymorpheusContent<TuiValueContentContext<Account>> {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : '';
    }

    @tuiPure
    protected filter(query: string | null): readonly Account[] {
        return this.items.filter(item => TUI_DEFAULT_MATCHER(item, query || ''));
    }

    protected setValue(): void {
        this.control.setValue(new Account('Dollars', 237));
    }
}
