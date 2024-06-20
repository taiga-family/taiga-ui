import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsDataList} from '@taiga-ui/core/components/data-list';

import {AbstractTuiNativeMultiSelect} from './native-multi-select';

@Component({
    selector: 'select[multiple][tuiSelect]:not([labels])',
    templateUrl: './native-multi-select.template.html',
    styleUrls: ['./native-multi-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataList(TuiNativeMultiSelectComponent),
        tuiProvide(AbstractTuiNativeMultiSelect, TuiNativeMultiSelectComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeMultiSelectComponent],
            useFactory: ({datalist}: TuiNativeMultiSelectComponent<unknown>) => datalist,
        },
    ],
    host: {
        '[attr.aria-invalid]': 'host.invalid',
        '[disabled]': 'host.disabled || control.readOnly',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '(change)': 'onValueChange($event.target.selectedOptions)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
})
export class TuiNativeMultiSelectComponent<T> extends AbstractTuiNativeMultiSelect<T> {
    @Input()
    public items: readonly T[] | null = [];

    protected onValueChange(selectedOptions: HTMLSelectElement['selectedOptions']): void {
        const selected = Array.from(selectedOptions).map(option => option.index);
        const value = this.items?.filter((_, index) => selected.includes(index)) || [];

        this.host.onSelectionChange(value);
    }
}
