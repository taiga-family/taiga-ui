import {Directive, inject} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    TUI_DATA_LIST_HOST,
    tuiAsOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';
import {AbstractTuiControl} from '@taiga-ui/legacy/classes';
import {TuiMultiSelectOptionComponent} from '@taiga-ui/legacy/components/multi-select-option';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiMultiSelectComponent} from '../multi-select.component';

export const TUI_MULTI_SELECT_OPTION = new PolymorpheusComponent(
    TuiMultiSelectOptionComponent,
);

@Directive({
    standalone: false,
    selector: '[tuiMultiSelectGroup]',
    providers: [
        tuiAsOptionContent(TUI_MULTI_SELECT_OPTION),
        {
            provide: TUI_DATA_LIST_HOST,
            useFactory: <T>(): TuiDataListHost<T> => {
                const multiSelect = inject(TuiMultiSelectComponent, {optional: true});
                const ngControl = inject(NgControl);
                const host = inject(AbstractTuiControl, {optional: true});
                const {identityMatcher, stringify} =
                    inject(TUI_ITEMS_HANDLERS, {optional: true}) ?? {};

                return (
                    multiSelect || {
                        stringify,
                        identityMatcher,
                        handleOption: (option) => {
                            const value = host?.value ?? ngControl.control?.value ?? [];
                            const result = tuiArrayToggle(value, option, identityMatcher);

                            if (host) {
                                host.value = result;
                            } else {
                                ngControl.control?.setValue(result);
                            }
                        },
                    }
                );
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
