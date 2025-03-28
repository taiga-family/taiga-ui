import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk/constants';
import type {TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    TUI_DATA_LIST_HOST,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-select-option',
    imports: [NgIf, TuiIcon, TuiScrollIntoView],
    templateUrl: './select-option.template.html',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._with-value]': 'option',
        '(click)': 'onClick()',
    },
})
export class TuiSelectOption<T> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly control = tuiInjectAuxiliary<TuiControl<T>>(
        (x) => x instanceof TuiControl,
    );

    protected readonly icon = inject(TUI_COMMON_ICONS).check;
    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    protected selected = computed(
        (controlValue = this.control()?.value(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            this.matcher(controlValue, optionValue),
    );

    protected onClick(): void {
        const value = this.option?.value();

        if (this.host?.handleOption && value !== undefined) {
            this.host.handleOption(value);
        }
    }

    private get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
    }
}
