import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

@Component({
    standalone: true,
    selector: 'select[tuiSelect]',
    imports: [NgForOf, NgIf, NgTemplateOutlet],
    templateUrl: './native-select.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsTextfieldAccessor(TuiNativeSelect), tuiAsControl(TuiNativeSelect)],
    hostDirectives: [TuiWithTextfield],
    host: {
        '[attr.aria-invalid]': 'invalid()',
        '[disabled]': '!interactive()',
        '[value]': 'stringified()',
        '(change)': 'selectOption($event.target.options.selectedIndex)',
    },
})
export class TuiNativeSelect<T>
    extends TuiControl<T | null>
    implements TuiTextfieldAccessor<T>
{
    protected readonly isFlat = tuiIsFlat;
    protected readonly placeholder = signal('');
    protected readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    protected readonly stringified = computed((value = this.value()) =>
        tuiIsPresent(value) ? this.itemsHandlers.stringify()(value) : '',
    );

    protected readonly showPlaceholder = computed(
        () => this.placeholder() && !this.stringified(),
    );

    protected readonly isSelected = computed(
        (value = this.value()) =>
            (x: T) =>
                tuiIsPresent(value) && this.itemsHandlers.identityMatcher()(x, value),
    );

    @Input()
    public items: ReadonlyArray<readonly T[]> | readonly T[] | null = [];

    @Input()
    public labels: readonly string[] = [];

    // TODO(v5): use signal inputs
    @Input('placeholder')
    public set placeholderSetter(x: string) {
        this.placeholder.set(x);
    }

    public setValue(value: T | null): void {
        this.onChange(value);
    }

    protected selectOption(index: number): void {
        const items = (this.items?.flat() ?? []) as T[];

        this.onChange(items[index - (this.showPlaceholder() ? 1 : 0)] ?? null);
    }
}
