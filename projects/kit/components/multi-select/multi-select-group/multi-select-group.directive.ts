import {Directive, forwardRef, Optional} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {EMPTY_FUNCTION, tuiArrayToggle} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST, tuiAsOptionContent, TuiDataListHost} from '@taiga-ui/core';
import {TuiMultiSelectOptionComponent} from '@taiga-ui/kit/components/multi-select-option';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens/items-handlers';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiMultiSelectComponent} from '../multi-select.component';

export const TUI_MULTI_SELECT_OPTION = new PolymorpheusComponent(
    TuiMultiSelectOptionComponent,
);

@Directive({
    selector: '[tuiMultiSelectGroup]',
    providers: [
        tuiAsOptionContent(TUI_MULTI_SELECT_OPTION),
        {
            provide: TUI_DATA_LIST_HOST,
            deps: [
                NgControl,
                [new Optional(), forwardRef(() => TuiMultiSelectComponent)],
                [new Optional(), TUI_ITEMS_HANDLERS],
            ],
            useFactory: <T>(
                control: NgControl,
                host: TuiDataListHost<T> | null,
                {stringify, identityMatcher}: TuiItemsHandlers<T> = {},
            ): TuiDataListHost<T> =>
                host || {
                    stringify,
                    identityMatcher,
                    handleOption: option =>
                        control.control?.setValue(
                            tuiArrayToggle(control.value || [], option, identityMatcher),
                        ),
                },
        },
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useValue: {
                writeValue: EMPTY_FUNCTION,
                registerOnChange: EMPTY_FUNCTION,
                registerOnTouched: EMPTY_FUNCTION,
            },
        },
    ],
})
export class TuiMultiSelectGroupDirective {}
