import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList, TuiValueContentContext} from '@taiga-ui/core';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiSelectDirective} from '../select.directive';

@Component({
    selector: 'select[tuiSelect][labels]:not([multiple])',
    templateUrl: './native-select-group.template.html',
    providers: [
        tuiAsDataList(TuiNativeSelectGroupComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectGroupComponent],
            useFactory: ({datalist}: TuiNativeSelectGroupComponent<unknown>) => datalist,
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
        '(change)': 'onValueChange($event.target.options.selectedIndex)',
    },
    styleUrls: ['./native-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeSelectGroupComponent<T> extends AbstractTuiNativeSelect<
    TuiSelectDirective,
    T
> {
    @Input()
    items: readonly T[][] | null = [];

    @Input()
    labels: readonly string[] = [];

    itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        this.stringify($implicit);

    get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    selected(option: T): boolean {
        return this.control.value === option;
    }

    onValueChange(index: number): void {
        const flatItems = this.items?.reduce((acc, val) => acc.concat(val));

        this.host.onValueChange(flatItems?.[index] || null);
    }
}
