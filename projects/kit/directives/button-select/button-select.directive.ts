import {Directive} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {
    tuiAsDataListHost,
    tuiAsOptionContent,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';

@Directive({
    standalone: true,
    selector: 'button[tuiButtonSelect]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsDataListHost(TuiButtonSelect),
        tuiDropdownOptionsProvider({align: 'right'}),
    ],
    hostDirectives: [TuiDropdownDirective, TuiNativeValidator, TuiWithDropdownOpen],
})
export class TuiButtonSelect<T> extends TuiControl<T> implements TuiDataListHost<T> {
    private readonly open = tuiDropdownOpen();

    public readonly size = 's';

    public handleOption(option: T): void {
        this.onChange(option);
        this.open.set(false);
    }
}
