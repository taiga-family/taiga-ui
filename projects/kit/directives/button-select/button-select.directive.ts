import {Directive, inject} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsDataListHost,
    tuiAsOptionContent,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {
    TuiDropdownDirective,
    TuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';

@Directive({
    selector: 'button[tuiButtonSelect]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsDataListHost(TuiButtonSelect),
        tuiDropdownOptionsProvider({align: 'end'}),
    ],
    hostDirectives: [TuiDropdownDirective, TuiNativeValidator, TuiWithDropdownOpen],
})
export class TuiButtonSelect<T>
    extends TuiControl<T | T[]>
    implements TuiDataListHost<T>
{
    private readonly open = inject(TuiDropdownOpen).open;
    private readonly handlers = inject(TUI_ITEMS_HANDLERS);

    public readonly size = 's';

    public handleOption(option: T): void {
        if (Array.isArray(this.control.value)) {
            const result = tuiArrayToggle(
                this.control.value as T[],
                option,
                this.handlers.identityMatcher(),
            );

            this.onChange(result);
        } else {
            this.onChange(option);
            this.open.set(false);
        }
    }
}
