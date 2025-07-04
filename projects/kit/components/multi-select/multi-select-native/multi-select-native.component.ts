import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject, Input} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiIsPresent} from '@taiga-ui/cdk/utils';
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
    },
})
export class TuiMultiSelectNative<T> {
    private readonly control = inject(TuiControl);
    private readonly textfield = inject(TuiTextfieldComponent);

    protected readonly isFlat = tuiIsFlat;
    // protected readonly placeholder = signal('');
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly mobile = inject(TUI_IS_MOBILE);

    // protected readonly stringified = computed((value = this.value()) =>
    //     tuiIsPresent(value) ? this.itemsHandlers.stringify()(value) : '',
    // );
    //
    // protected readonly showPlaceholder = computed(
    //     () => this.placeholder() && !this.stringified(),
    // );

    protected readonly isSelected = computed(
        (value = this.control.value()) =>
            (x: T) =>
                tuiIsPresent(value) && this.handlers.identityMatcher()(x, value),
    );

    // protected readonly valueEffect = effect(() => {
    //     this.textfield.value.set(this.stringified());
    // }, TUI_ALLOW_SIGNAL_WRITES);

    @Input()
    public items: ReadonlyArray<readonly T[]> | readonly T[] | null = [];

    @Input()
    public labels: readonly string[] = [];

    @Input()
    public set placeholder(placeholder: string) {
        this.textfield.fillerSetter = placeholder;
    }

    // public setValue(value: T | null): void {
    //     this.onChange(value);
    // }
    //

    protected selectOption(index: number): void {
        const items = this.items?.flat() ?? [];

        if (items) {
            this.textfield.handleOption(items[index]);
        }
    }
}
