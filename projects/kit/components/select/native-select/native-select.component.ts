import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList} from '@taiga-ui/core';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';

@Component({
    selector: 'select[tuiSelect]:not([labels]):not([multiple])',
    templateUrl: './native-select.template.html',
    providers: [
        tuiAsDataList(TuiNativeSelectComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectComponent],
            useFactory: ({datalist}: TuiNativeSelectComponent) => datalist,
        },
        {
            provide: AbstractTuiNativeSelect,
            useExisting: TuiNativeSelectComponent,
        },
    ],
    host: {
        '[attr.aria-invalid]': 'host.invalid',
        '[disabled]': 'host.disabled || control.readOnly',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '[value]': 'host.value',
        '(change)': 'host.onValueChange($event.target.value)',
    },
    styleUrls: ['./native-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeSelectComponent extends AbstractTuiNativeSelect {
    @Input()
    items: readonly string[] | null = [];
}
