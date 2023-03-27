import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList} from '@taiga-ui/core';

import {AbstractTuiNativeMultiSelect} from './native-multi-select';

@Component({
    selector: 'select[multiple][tuiSelect]:not([labels])',
    templateUrl: './native-multi-select.template.html',
    providers: [
        tuiAsDataList(TuiNativeMultiSelectComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeMultiSelectComponent],
            useFactory: ({datalist}: TuiNativeMultiSelectComponent) => datalist,
        },
        {
            provide: AbstractTuiNativeMultiSelect,
            useExisting: TuiNativeMultiSelectComponent,
        },
    ],
    host: {
        '[attr.aria-invalid]': 'host.invalid',
        '[disabled]': 'host.disabled || control.readOnly',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '(change)': 'onValueChange(elementRef.nativeElement)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-multi-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeMultiSelectComponent extends AbstractTuiNativeMultiSelect {
    @Input()
    items: string[] | null = [];
}
