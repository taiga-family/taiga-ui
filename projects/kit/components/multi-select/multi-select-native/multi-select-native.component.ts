import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject, Input} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsPresent} from '@taiga-ui/cdk/utils';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {
    TuiSelectLike,
    TuiTextfield,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
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
        '(click.stop.zoneless)': '0',
        '(change)': 'selectOption($event.target.options.selectedIndex)',
        '(focus)': 'mobile && el.click()',
    },
})
export class TuiMultiSelectNative<T> {
    private readonly control: TuiControl<readonly T[]> = inject(TuiControl);
    private readonly textfield = inject(TuiTextfieldComponent);

    protected readonly isFlat = tuiIsFlat;
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly mobile = inject(TUI_IS_MOBILE);
    protected readonly el = tuiInjectElement<HTMLSelectElement>();

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

    protected selectOption(index: number): void {
        const items = this.items || [];
        const item = items.flat()[index];

        if (item) {
            this.textfield.handleOption(item);
        }
    }
}
