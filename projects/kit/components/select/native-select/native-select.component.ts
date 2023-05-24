import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList, TuiValueContentContext} from '@taiga-ui/core';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiSelectDirective} from '../select.directive';

@Component({
    selector: 'select[tuiSelect]:not([labels]):not([multiple])',
    templateUrl: './native-select.template.html',
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
    styleUrls: ['./native-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeSelectComponent<T> extends AbstractTuiNativeSelect<
    TuiSelectDirective,
    T
> {
    @Input()
    items: readonly T[] | null = [];

    itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        this.stringify($implicit);

    get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    selected(option: T): boolean {
        return this.control.value === option;
    }

    onValueChange(index: number): void {
        this.host.onValueChange(this.items?.[index] || null);
    }
}
