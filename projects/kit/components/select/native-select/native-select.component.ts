import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    type ElementRef,
    inject,
    Input,
    type QueryList,
    signal,
    ViewChildren,
} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {EMPTY_QUERY, TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsTextfieldAccessor,
    type TuiTextfieldAccessor,
    TuiTextfieldDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
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
        '(change)': 'selectOption($event.target.options.selectedIndex)',
    },
})
export class TuiNativeSelect<T>
    extends TuiControl<T | null>
    implements TuiTextfieldAccessor<T>
{
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly options =
        signal<QueryList<ElementRef<HTMLOptionElement>>>(EMPTY_QUERY);

    protected readonly isFlat = tuiIsFlat;
    protected readonly placeholder = signal('');
    protected readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    protected readonly stringified = computed((value = this.value()) =>
        tuiIsPresent(value) ? this.itemsHandlers.stringify()(value) : '',
    );

    protected readonly isSelected = computed(
        (value = this.value()) =>
            (x: T) =>
                tuiIsPresent(value) && this.itemsHandlers.identityMatcher()(x, value),
    );

    protected readonly valueEffect = effect(() => {
        /**
         * Wait until all `<option>`-s are inside DOM.
         * Otherwise
         * ```
         * document.querySelector('select').value = 'even upcoming valid value';
         * // same as
         * document.querySelector('select').value = '';
         * ```
         * (it breaks `tuiValue` utility logic)
         */
        if (this.options().length) {
            this.textfield.value.set(this.stringified());
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

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

    @ViewChildren('optionRef')
    protected set optionsSetter(options: QueryList<ElementRef<HTMLOptionElement>>) {
        this.options.set(options);
    }

    protected selectOption(index: number): void {
        const items = (this.items?.flat() ?? []) as T[];
        const placeholderOffset = this.stringified() ? 0 : 1;

        this.onChange(items[index - placeholderOffset] ?? null);
    }
}
