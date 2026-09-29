import {
    computed,
    contentChildren,
    Directive,
    effect,
    inject,
    input,
    model,
    signal,
} from '@angular/core';
import {type ControlValueAccessor, NgControl} from '@angular/forms';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk/constants';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';

import {TuiListboxOption} from './listbox-option.directive';

@Directive({
    selector: '[tuiListbox]',
    host: {
        role: 'listbox',
        tabindex: '0',
        '[attr.aria-disabled]': 'disabled()',
        '[attr.aria-multiselectable]': 'multiple() || null',
        '(focus)': 'onFocus()',
        '(focusout)': 'onFocusOut($event)',
        '(keydown)': 'onKeyDown($event)',
    },
})
export class TuiListbox<T> implements ControlValueAccessor {
    private readonly el = tuiInjectElement();
    private readonly control = inject(NgControl, {self: true, optional: true});
    private readonly options = contentChildren<TuiListboxOption<T>>(TuiListboxOption, {
        descendants: true,
    });

    private readonly active = signal<TuiListboxOption<T> | null>(null);
    private readonly formDisabled = signal(false);
    private orderedOptions: ReadonlyArray<TuiListboxOption<T>> = [];
    private recovering = false;

    public readonly value = model<T | readonly T[] | null>(null);
    public readonly multiple = input(false);
    public readonly disabledInput = input(false, {alias: 'disabled'});
    public readonly disabled = computed(
        () => this.disabledInput() || this.formDisabled(),
    );

    public readonly identityMatcher = input<TuiIdentityMatcher<T>>(
        TUI_DEFAULT_IDENTITY_MATCHER,
    );

    constructor() {
        if (this.control) {
            this.control.valueAccessor = this;
        }

        effect(() => {
            const options = this.options();
            const active = this.active();

            this.orderedOptions = options;

            if (active && options.includes(active)) {
                queueMicrotask(() => {
                    if (
                        active.element.isConnected &&
                        document.activeElement === document.body &&
                        !this.disabled()
                    ) {
                        active.focus();
                    }
                });
            }
        });
    }

    public isSelected(option: TuiListboxOption<T>): boolean {
        const value = this.value();
        const matches = (item: T): boolean =>
            this.identityMatcher()(item, option.value());

        return Array.isArray(value)
            ? value.some(matches)
            : value !== null && matches(value as T);
    }

    public select(option: TuiListboxOption<T>): void {
        if (this.disabled() || option.disabled()) {
            return;
        }

        const item = option.value();
        const value = this.value();
        let next: T | readonly T[];

        if (this.multiple()) {
            const selected = Array.isArray(value) ? value : [];

            next = selected.some((entry) => this.identityMatcher()(entry, item))
                ? selected.filter((entry) => !this.identityMatcher()(entry, item))
                : [...selected, item];
        } else {
            next = item;
        }

        this.value.set(next);
        this.onChange(next);
    }

    public onOptionFocus(option: TuiListboxOption<T>): void {
        if (this.disabled() || option.disabled()) {
            return;
        }

        this.active.set(option);
    }

    public onOptionDestroy(option: TuiListboxOption<T>): void {
        if (this.active() !== option) {
            return;
        }

        const before = this.orderedOptions;
        const index = before.indexOf(option);

        this.active.set(null);
        this.recovering = true;
        this.el.focus({preventScroll: true});
        queueMicrotask(() => {
            this.recovering = false;

            if (
                this.el.isConnected &&
                (document.activeElement === this.el ||
                    document.activeElement === document.body) &&
                !this.disabled()
            ) {
                const enabled = this.enabledOptions();
                const next = before
                    .slice(index + 1)
                    .find((item) => enabled.includes(item));

                const previous = before
                    .slice(0, index)
                    .reverse()
                    .find((item) => enabled.includes(item));

                (next ?? previous ?? enabled[0])?.focus();
            }
        });
    }

    public writeValue(value: T | readonly T[] | null): void {
        this.value.set(value);
    }

    public registerOnChange(fn: (value: T | readonly T[] | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(disabled: boolean): void {
        this.formDisabled.set(disabled);
    }

    protected onFocus(): void {
        if (this.disabled() || this.recovering) {
            return;
        }

        const options = this.enabledOptions();
        const target =
            options.find((option) => option === this.active()) ??
            options.find((option) => this.isSelected(option)) ??
            options[0];

        target?.focus();
    }

    protected onFocusOut(event: FocusEvent): void {
        if (!this.el.contains(event.relatedTarget as Node | null)) {
            this.onTouched();
        }
    }

    protected onKeyDown(event: KeyboardEvent): void {
        if (this.disabled()) {
            return;
        }

        const options = this.enabledOptions();
        const current = options.findIndex((option) => option.element === event.target);

        switch (event.key) {
            case ' ':
            case 'Enter':
                if (current >= 0) {
                    this.select(options[current]!);
                } else {
                    return;
                }

                break;
            case 'ArrowDown':
                tuiMoveFocus(
                    current,
                    options.map((option) => option.element),
                    1,
                );
                break;
            case 'ArrowUp':
                tuiMoveFocus(
                    current < 0 ? options.length : current,
                    options.map((option) => option.element),
                    -1,
                );
                break;
            case 'End':
                options[options.length - 1]?.focus();
                break;
            case 'Home':
                options[0]?.focus();
                break;
            default:
                return;
        }

        event.preventDefault();
    }

    private onChange: (value: T | readonly T[] | null) => void = () => {};
    private onTouched: () => void = () => {};

    private enabledOptions(): ReadonlyArray<TuiListboxOption<T>> {
        return this.options().filter(
            (option) => !option.disabled() && option.element.isConnected,
        );
    }
}
