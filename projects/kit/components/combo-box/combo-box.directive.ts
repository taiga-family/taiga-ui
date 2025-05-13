import {Directive, effect, inject, Input, untracked} from '@angular/core';
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
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownEnabled, tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
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
        '(blur)': 'onTouched()',
        '(click)': 'toggle()',
        '(input)': 'onInput($event.target.value)',
        '(keydown.enter)': 'keydownEnter($event)',
    },
})
export class TuiComboBox<T>
    extends TuiControl<T | string | null>
    implements TuiTextfieldAccessor<T>
{
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly textfield: TuiTextfieldComponent<T> = inject(TuiTextfieldComponent);

    private readonly open = tuiDropdownOpen();
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly datalist = tuiInjectAuxiliary<TuiDataListAccessor<T>>(
        (x) => 'getOptions' in x,
    );

    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);

    protected readonly valueEffect = effect(() => {
        const value = this.value() ?? '';
        const stringified = tuiIsString(value)
            ? value
            : this.itemsHandlers.stringify()(value);

        this.textfield.value.update((x) => stringified || x);
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly blurEffect = effect(() => {
        const value = untracked(() => this.value());

        if (!this.textfield.focused() && this.strict && !value) {
            this.textfield.value.set('');
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    @Input()
    public strict = true;

    // TODO before merge: `strictMatcher` is used not only for `[strict]=true`.
    //  Should we rename it to `searchMatcher` ?
    @Input()
    public strictMatcher: TuiStringMatcher<T> | null = TUI_STRICT_MATCHER;

    public setValue(value: T): void {
        this.onChange(value);

        if (!value) {
            this.open.set(true);
            this.textfield.value.set('');
        }
    }

    protected toggle(): void {
        this.open.update((x) => this.dropdownEnabled() && !x);
    }

    protected onInput(value: string): void {
        const match = this.options.find((item) =>
            this.strictMatcher?.(item, value, this.itemsHandlers.stringify()),
        );
        const fallback = this.strict || !value ? null : value;

        this.onChange(match ?? fallback);

        if (match) {
            setTimeout((end = this.el.value.length) =>
                this.el.setSelectionRange(end, end),
            );
        }

        if (this.dropdownEnabled()) {
            this.open.set(!match);
        }
    }

    protected keydownEnter(event: KeyboardEvent): void {
        if (this.open()) {
            event.preventDefault();
        }

        if (this.options.length === 1) {
            this.onChange(this.options[0]!);
            this.open.set(false);
            setTimeout((end = this.el.value.length) =>
                this.el.setSelectionRange(end, end),
            );
        }
    }

    private get options(): readonly T[] {
        return this.datalist()?.getOptions() || [];
    }
}
