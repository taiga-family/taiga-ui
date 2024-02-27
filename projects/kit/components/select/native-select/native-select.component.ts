import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList} from '@taiga-ui/core';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import type {TuiSelectDirective} from '../select.directive';

@Component({
    selector: 'select[tuiSelect]:not([labels]):not([multiple])',
    templateUrl: './native-select.template.html',
    styleUrls: ['./native-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataList(TuiNativeSelectComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectComponent],
            useFactory: ({datalist}: TuiNativeSelectComponent<unknown>) => datalist,
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
        '(change)': 'onValueChange($event.target.options.selectedIndex)',
    },
})
export class TuiNativeSelectComponent<T> extends AbstractTuiNativeSelect<
    TuiSelectDirective,
    T
> {
    @Input()
    public items: readonly T[] | null = [];

    protected get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    protected selected(option: T): boolean {
        return this.control.value === option;
    }

    protected onValueChange(index: number): void {
        this.host.onValueChange(this.items?.[index] || null);
    }
}
