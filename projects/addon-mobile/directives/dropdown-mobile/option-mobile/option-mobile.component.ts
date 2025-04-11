import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    TUI_DATA_LIST_HOST,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiRadio} from '@taiga-ui/kit/components/radio';
import {TuiSelectDirective} from '@taiga-ui/kit/components/select';

@Component({
    standalone: true,
    imports: [FormsModule, NgIf, TuiRadio],
    templateUrl: './option-mobile.template.html',
    styleUrls: ['./option-mobile.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(click)': 'onClick()',
    },
})
export class TuiOptionMobile<T> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    private readonly control = tuiInjectAuxiliary<TuiControl<T>>(
        (x) => x instanceof TuiControl,
    );

    protected readonly select = tuiInjectAuxiliary<TuiControl<T>>(
        (x) => x instanceof TuiSelectDirective,
    );

    protected readonly selected = computed(
        (controlValue = this.control()?.value(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            this.itemsHandlers.identityMatcher()(controlValue, optionValue),
    );

    protected onClick(): void {
        const value = this.option?.value();

        if (this.host?.handleOption && value !== undefined) {
            this.host.handleOption(value);
        }
    }
}
