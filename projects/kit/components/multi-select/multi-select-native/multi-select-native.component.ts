import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject, Input} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsPresent} from '@taiga-ui/cdk/utils';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {
    TuiSelectLike,
    TuiTextfield,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiInputChipDirective} from '@taiga-ui/kit/components/input-chip';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

import {TuiMultiSelectOption} from '../multi-select-option/multi-select-option.component';

@Component({
    standalone: true,
    selector: 'select[tuiMultiSelect]',
    imports: [NgForOf, NgIf, NgTemplateOutlet, TuiDataListWrapper, TuiTextfield],
    templateUrl: './multi-select-native.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsOptionContent(TuiMultiSelectOption)],
    hostDirectives: [TuiInputChipDirective, TuiSelectLike],
    host: {
        multiple: '',
        size: '1',
        '(click.stop.zoneless)': '0',
        '(input)': 'onInput()',
    },
})
export class TuiMultiSelectNative<T> {
    private readonly control: TuiControl<readonly T[]> = inject(TuiControl);
    private readonly textfield = inject(TuiTextfieldComponent);

    protected readonly isFlat = tuiIsFlat;
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly el = tuiInjectElement<HTMLSelectElement>();
    protected readonly mobile =
        inject(TUI_IS_IOS) || (inject(TUI_IS_ANDROID) && 'showPicker' in this.el);

    protected readonly isSelected = computed(
        (value = this.control.value()) =>
            (x: T) =>
                tuiIsPresent(value) &&
                value.some((item) => this.handlers.identityMatcher()(x, item)),
    );

    @Input()
    public items: ReadonlyArray<readonly T[]> | readonly T[] | null = [];

    @Input()
    public labels: readonly string[] = [];

    @Input()
    public set placeholder(placeholder: string) {
        this.textfield.fillerSetter = placeholder;
    }

    protected onInput(): void {
        const items = this.items || [];
        const options = Array.from(this.el.selectedOptions).map(({index}) => index);

        this.textfield.cva?.onChange(items.flat().filter((_, i) => options.includes(i)));
    }
}
