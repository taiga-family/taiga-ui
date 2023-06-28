import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList} from '@taiga-ui/core';

import {AbstractTuiNativeMultiSelect} from './native-multi-select';

@Component({
    selector: 'select[multiple][tuiSelect][labels]',
    templateUrl: './native-multi-select-group.template.html',
    providers: [
        tuiAsDataList(TuiNativeMultiSelectGroupComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeMultiSelectGroupComponent],
            useFactory: ({datalist}: TuiNativeMultiSelectGroupComponent<unknown>) =>
                datalist,
        },
        {
            provide: AbstractTuiNativeMultiSelect,
            useExisting: TuiNativeMultiSelectGroupComponent,
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
    styleUrls: ['./native-multi-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeMultiSelectGroupComponent<
    T,
> extends AbstractTuiNativeMultiSelect<T> {
    @Input()
    items: readonly T[][] | null = [];

    @Input()
    labels: readonly string[] = [];

    onValueChange(selectedOptions: HTMLSelectElement['selectedOptions']): void {
        const selected = Array.from(selectedOptions).map(option => option.index);
        const flatItems = this.items?.reduce((acc, val) => acc.concat(val)) || [];
        const value = flatItems.filter((_, index) => selected.includes(index));

        this.host.onSelectionChange(value);
    }
}
