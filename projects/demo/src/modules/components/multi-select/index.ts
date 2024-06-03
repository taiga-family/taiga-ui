import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {
    TuiBooleanHandler,
    TuiContext,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER, tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    TuiDataListDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiHintOptionsDirective,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

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
        TuiLinkDirective,
        TuiMultiSelectModule,
        ReactiveFormsModule,
        TuiDropdownOptionsDirective,
        TuiDropdownOpenDirective,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        TuiDataListWrapperComponent,
        TuiDataListDirective,
        TuiButtonDirective,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties([
            'tuiTextfieldPrefix',
            'tuiTextfieldPostfix',
            'tuiTextfieldFiller',
            'tuiTextfieldCustomContent',
        ]),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
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
        String,
        item => String(String(item).match(/\d+/)),
    ];

    protected stringify = this.stringifyVariants[0];

    protected identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    protected identityMatcher = this.identityMatcherVariants[0];

    protected tagValidatorVariants: ReadonlyArray<TuiBooleanHandler<Account>> = [
        TUI_TRUE_HANDLER,
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
    > = [TUI_FALSE_HANDLER, (item: Account) => item.balance < 300];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected setValue(): void {
        this.control.setValue([new Account('Dollar', 237)]);
    }
}
