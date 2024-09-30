import {Directive} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';
import {TuiWithTextfieldDropdown} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';

@Directive({
    standalone: true,
    selector: 'button[tuiButtonSelect]',
    providers: [
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
        tuiDropdownOptionsProvider({align: 'right'}),
    ],
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown],
})
export class TuiButtonSelect<T> extends TuiControl<T> implements TuiDataListHost<T> {
    private readonly open = tuiDropdownOpen();

    public readonly size = 's';

    public handleOption(option: T): void {
        this.onChange(option);
        this.open.set(false);
    }
}
