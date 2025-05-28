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
import {TUI_ALLOW_SIGNAL_WRITES, TUI_STRICT_MATCHER} from '@taiga-ui/cdk/constants';
import type {TuiStringMatcher} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListAccessor} from '@taiga-ui/core/components/data-list';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    tuiInjectAuxiliary,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownDirective,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';

@Directive({
    standalone: true,
    selector: 'input[tuiComboBox]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsTextfieldAccessor(TuiComboBox),
        tuiAsControl(TuiComboBox),
        tuiAsAuxiliary(TuiComboBox),
    ],
    hostDirectives: [TuiWithTextfield],
    host: {
        '[disabled]': 'disabled()',
        '(click)': 'toggleDropdown()',
        '(input.debounce~0ms)': 'toggleDropdown(true)',
        '(keydown.enter)': 'keydownEnter($event)',
    },
})
export class TuiComboBox<T>
    extends TuiControl<T | string | null>
    implements TuiTextfieldAccessor<T>
{
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly host: TuiTextfieldComponent<T> = inject(TuiTextfieldComponent);
    private readonly textfield: TuiTextfieldDirective<T> = inject(TuiTextfieldDirective);
    private readonly open = tuiDropdownOpen();
    private readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    private readonly dropdown = inject(TuiDropdownDirective);
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly matcher = signal<TuiStringMatcher<T>>(TUI_STRICT_MATCHER);
    private readonly strict = signal(true);
    private readonly datalist = tuiInjectAuxiliary<TuiDataListAccessor<T>>(
        (x) => x !== this && 'options' in x && isSignal(x.options),
    );

    private readonly options = computed(
        () =>
            this.datalist()
                ?.options?.() // TODO(v5): remove optional call `?.()`
                .filter((x) => !this.itemsHandlers.disabledItemHandler()(x)) ?? [],
    );

    protected readonly matchingEffect = effect(() => {
        const options = this.options();

        if (!options.length) {
            if (!this.strict()) {
                this.onChange(this.textfield.value());
            }

            return;
        }

        const selectedOption =
            options.find((x) =>
                this.matcher()(x, this.textfield.value(), this.itemsHandlers.stringify()),
            ) ?? null;
        const stringified = this.stringify(selectedOption);
        const fallback = this.strict() ? null : this.textfield.value();

        this.onChange(selectedOption ?? fallback);

        if (stringified && stringified !== untracked(() => this.textfield.value())) {
            this.textfield.value.set(stringified);
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly blurEffect = effect(() => {
        const incomplete = untracked(() => this.strict() && !this.value());

        if (!this.host.focused() && incomplete) {
            this.textfield.value.set('');
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    // TODO(v5): use signal input
    @Input('strict')
    public set strictSetter(x: boolean) {
        this.strict.set(x);
    }

    // TODO(v5): use signal input
    @Input('matcher')
    public set matcherSetter(x: TuiStringMatcher<T> | null) {
        this.matcher.set(x ?? TUI_STRICT_MATCHER);
    }

    public setValue(value: T | string | null): void {
        const stringified = this.stringify(value);

        if (stringified !== this.textfield.value()) {
            this.textfield.value.set(stringified);
            setTimeout((end = stringified.length) => this.el.setSelectionRange(end, end));
        }

        this.onChange(value);

        if (!value) {
            this.toggleDropdown(true);
        }
    }

    public override writeValue(value: T | string | null): void {
        super.writeValue(value);
        this.setValue(value);
    }

    protected toggleDropdown(open = !this.open()): void {
        if (this.dropdownEnabled() && this.dropdown.content) {
            this.open.set(open);
        }
    }

    protected keydownEnter(event: KeyboardEvent): void {
        if (!this.open()) {
            return;
        }

        event.preventDefault();

        if (this.options().length === 1) {
            this.setValue(this.options()[0]!);
            this.toggleDropdown(false);
        }
    }

    private stringify(value: T | string | null): string {
        if (tuiIsString(value)) {
            return value;
        }

        return value ? this.itemsHandlers.stringify()(value) : '';
    }
}
