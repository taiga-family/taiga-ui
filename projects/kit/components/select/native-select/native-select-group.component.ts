import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList} from '@taiga-ui/core';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';

@Component({
    selector: 'select[tuiSelect][labels]:not([multiple])',
    templateUrl: './native-select-group.template.html',
    providers: [
        tuiAsDataList(TuiNativeSelectGroupComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectGroupComponent],
            useFactory: ({datalist}: TuiNativeSelectGroupComponent) => datalist,
        },
        {
            provide: AbstractTuiNativeSelect,
            useExisting: TuiNativeSelectGroupComponent,
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
export class TuiNativeSelectGroupComponent extends AbstractTuiNativeSelect {
    @Input()
    items: readonly string[][] | null = [];

    @Input()
    labels: readonly string[] = [];
}
