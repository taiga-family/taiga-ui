import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, tuiProvide} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiHint,
    TuiIcon,
    TuiLink,
    TuiNotification,
} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

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
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotification,
        TuiLink,
        TuiSelectModule,
        ReactiveFormsModule,
        TuiDropdown,
        TuiHint,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiDataList,
        TuiIcon,
        TuiButton,
        InheritedDocumentation,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties(['tuiTextfieldPrefix', 'tuiTextfieldPostfix']),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    @ViewChild('valueTemplateContent')
    private readonly valueTemplateRef: PolymorpheusContent<
        TuiValueContentContext<Account>
    >;

    protected readonly example9 = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
        LESS: import('./examples/9/index.less?raw'),
        './account/index.ts': import('./examples/9/account/index.ts?raw'),
        './account/index.less': import('./examples/9/account/index.less?raw'),
        './account/index.html': import('./examples/9/account/index.html?raw'),
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

    public readonly iconVariants = ['', '@tui.pie-chart', '@tui.credit-card'];

    public override iconLeft = this.iconVariants[0];

    public control = new FormControl<Account | null>(null, Validators.required);

    protected get valueContent(): PolymorpheusContent<TuiValueContentContext<Account>> {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : '';
    }

    protected setValue(): void {
        this.control.setValue(new Account('Dollar', 237));
    }
}
