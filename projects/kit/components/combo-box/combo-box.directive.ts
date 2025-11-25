import {
    computed,
    Directive,
    effect,
    inject,
    Input,
    isSignal,
    signal,
    untracked,
} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_STRICT_MATCHER} from '@taiga-ui/cdk/constants';
import {type TuiStringMatcher} from '@taiga-ui/cdk/types';
import {
    tuiAsOptionContent,
    type TuiDataListAccessor,
} from '@taiga-ui/core/components/data-list';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiAsTextfieldAccessor,
    tuiInjectAuxiliary,
    type TuiTextfieldAccessor,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {
    TuiDropdownDirective,
    tuiDropdownEnabled,
    TuiDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';

@Directive({
    selector: 'input[tuiComboBox]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsTextfieldAccessor(TuiComboBoxDirective),
        tuiAsControl(TuiComboBoxDirective),
    ],
    hostDirectives: [TuiWithInput],
    host: {
        '[disabled]': 'disabled()',
        '(click)': 'toggleDropdown()',
        '(input)': 'toggleDropdown(true)',
        '(keydown.enter)': 'keydownEnter($event)',
    },
})
export class TuiComboBoxDirective<T>
    extends TuiControl<T | string | null>
    implements TuiTextfieldAccessor<T>
{
    private readonly host: TuiTextfieldComponent<T> = inject(TuiTextfieldComponent);
    private readonly input: TuiInputDirective<T> = inject(TuiInputDirective);
    private readonly open = inject(TuiDropdownOpen).open;
    private readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    private readonly dropdown = inject(TuiDropdownDirective);
    private readonly handlers: TuiItemsHandlers<T | string> = inject(TUI_ITEMS_HANDLERS);

    private readonly matcher = signal<TuiStringMatcher<T> | null>(TUI_STRICT_MATCHER);
    private readonly strict = signal(true);
    private readonly datalist = tuiInjectAuxiliary<TuiDataListAccessor<T>>(
        (x) => x !== this && 'options' in x && isSignal(x.options),
    );

    private readonly options = computed(
        () =>
            this.datalist()
                ?.options?.() // TODO(v5): remove optional call `?.()`
                .filter((x) => !this.handlers.disabledItemHandler()(x)) ?? [],
    );

    protected readonly nonStrictControlEffect = effect(() => {
        if (
            !this.options().length &&
            !this.strict() &&
            this.stringify(this.value()) !== this.input.value()
        ) {
            this.onChange(this.input.value() || null);
        }
    });

    protected readonly matchingEffect = effect(() => {
        const options = this.options();
        const matcher = this.matcher();

        if (!options.length || !matcher) {
            return;
        }

        const textfieldValue = this.input.value();
        const selectedOption = options.find((x) =>
            matcher(x, textfieldValue, this.handlers.stringify()),
        );
        const value = untracked(() => this.value());
        const unchanged = this.stringify(value) === textfieldValue;
        const fallback = this.strict() || !textfieldValue ? null : textfieldValue;

        this.onChange(
            selectedOption ??
                /**
                 * Don't clear already not-null form control value on new `this.options()` array.
                 * Otherwise, `ComboBox` becomes incompatible with virtual scroll
                 * (which displays large lists of elements by only rendering the items that fit on-screen).
                 * Users can still able to patch form value with `null` on new items if they wish the such behavior.
                 */
                (unchanged ? value : fallback),
        );
    });

    protected readonly newValueEffect = effect(() => {
        const stringified = this.stringify(this.value());

        this.input.value.update((x) => stringified || x);
    });

    protected readonly blurEffect = effect(() => {
        const incomplete = untracked(() => this.strict() && this.value() === null);

        if (!this.host.focused() && incomplete) {
            this.input.value.set('');
        }
    });

    // TODO(v5): use signal input
    @Input('strict')
    public set strictSetter(x: boolean) {
        this.strict.set(x);
    }

    // TODO(v5): use signal input
    @Input('matcher')
    public set matcherSetter(x: TuiStringMatcher<T> | null) {
        this.matcher.set(x);
    }

    public setValue(value: T | null): void {
        this.input.setValue(value);
        this.onChange(value);

        if (!value) {
            this.toggleDropdown(true);
        }
    }

    public override writeValue(value: T | string | null): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = untracked(() => value !== this.value());

        if (changed || reset) {
            super.writeValue(value);
            untracked(() => this.input.value.set(this.stringify(value)));
        }
    }

    protected toggleDropdown(open = !this.open()): void {
        if (this.dropdownEnabled() && this.dropdown.content()) {
            this.open.set(open);
        }
    }

    protected keydownEnter(event: KeyboardEvent): void {
        if (!this.open()) {
            return;
        }

        event.preventDefault();

        const options = this.options();

        if (options.length === 1 && options[0]) {
            this.setValue(options[0]);
            this.toggleDropdown(false);
        }
    }

    private stringify(value?: T | string | null): string {
        return value != null ? this.handlers.stringify()(value) : '';
    }
}
