import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk/constants';
import type {TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiDirectiveBinding, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    TUI_DATA_LIST_HOST,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-select-option',
    template: '',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiScrollIntoView],
    host: {
        '[class._selected]': 'selected()',
        '(click)': 'onClick()',
    },
})
export class TuiSelectOption<T> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly control = tuiInjectAuxiliary<TuiControl<T>>(
        (x) => x instanceof TuiControl,
    );

    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    protected readonly icon =
        this.option &&
        tuiDirectiveBinding(TuiIcons, 'iconEnd', inject(TUI_COMMON_ICONS).check, {});

    protected readonly selected = computed(
        (controlValue = this.control()?.value(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            this.matcher(controlValue, optionValue),
    );

    protected readonly scrolled = tuiDirectiveBinding(
        TuiScrollIntoView,
        'tuiScrollIntoView',
        this.selected,
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
