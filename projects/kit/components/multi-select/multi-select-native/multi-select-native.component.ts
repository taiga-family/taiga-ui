import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {WA_IS_ANDROID, WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsOptionContent, TuiDataList} from '@taiga-ui/core/components/data-list';
import {
    TuiSelectLike,
    TuiTextfield,
    TuiTextfieldMultiComponent,
} from '@taiga-ui/core/components/textfield';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {TuiInputChipDirective} from '@taiga-ui/kit/components/input-chip';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

import {TuiMultiSelectGroupComponent} from '../multi-select-group/multi-select-group.component';
import {TuiMultiSelectOption} from '../multi-select-option/multi-select-option.component';

@Component({
    selector: 'select[tuiMultiSelect]',
    imports: [NgTemplateOutlet, TuiDataList, TuiMultiSelectGroupComponent, TuiTextfield],
    templateUrl: './multi-select-native.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsOptionContent(TuiMultiSelectOption)],
    hostDirectives: [TuiInputChipDirective, TuiSelectLike],
    host: {
        multiple: '',
        '[size]': 'mobile ? 1 : 2',
        '(click.stop.zoneless)': '0',
        '(input)': 'onInput()',
    },
})
export class TuiMultiSelectNative<T> {
    private readonly control: TuiControl<readonly T[]> = inject(TuiControl);
    private readonly textfield = inject(TuiTextfieldMultiComponent);

    protected readonly isFlat = tuiIsFlat;
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly el = tuiInjectElement<HTMLSelectElement>();
    protected readonly mobile =
        inject(WA_IS_IOS) || (inject(WA_IS_ANDROID) && 'showPicker' in this.el);

    protected readonly isSelected = computed(
        (value = this.control.value()) =>
            (x: T) =>
                tuiIsPresent(value) &&
                value.some((item) => this.handlers.identityMatcher()(x, item)),
    );

    public readonly items = input<ReadonlyArray<readonly T[]> | readonly T[] | null>([]);
    public readonly labels = input<readonly string[]>([]);
    public readonly placeholder = input('');

    protected readonly binding = tuiDirectiveBinding(
        TuiTextfieldMultiComponent,
        'filler',
        this.placeholder,
        {},
    );

    protected onInput(): void {
        const items = this.items()?.flat() || [];
        const options = Array.from(this.el.selectedOptions).map(({index}) => index);

        this.textfield.cva()?.onChange(items.filter((_, i) => options.includes(i)));
    }
}
