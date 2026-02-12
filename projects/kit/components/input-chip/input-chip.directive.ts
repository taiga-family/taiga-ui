import {Directive, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiGetClipboardDataText, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiSanitizeText} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiAsTextfieldAccessor,
    type TuiTextfieldAccessor,
    TuiTextfieldMultiComponent,
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
import {filter} from 'rxjs';

import {TUI_INPUT_CHIP_OPTIONS} from './input-chip.options';

// TODO: Consider making input[tuiTextfieldMulti] to reuse here and in InputDateMulti
@Directive({
    selector: 'input[tuiInputChip]',
    providers: [
        tuiAsControl(TuiInputChipDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputChipDirective),
    ],
    hostDirectives: [TuiWithInput],
    host: {
        enterkeyhint: 'enter',
        '[disabled]': 'disabled()',
        '(keydown.enter.prevent)': 'onEnter()',
        '(keydown.zoneless)': 'onBackspace($event.key)',
        '(input)': 'onInput()',
        '(paste.prevent)': 'onPaste($event)',
        '(drop.prevent)': 'onPaste($event)',
        '(focus)': 'scrollTo()',
    },
})
export class TuiInputChipDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>
{
    private readonly options = inject(TUI_INPUT_CHIP_OPTIONS);
    private readonly mobile = inject(WA_IS_MOBILE);
    private readonly dropdown = inject(TuiDropdownDirective);

    protected readonly textfield = inject(TuiTextfieldMultiComponent);
    protected readonly open = inject(TuiDropdownOpen).open;
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly sub = inject(TuiActiveZone)
        .tuiActiveZoneChange.pipe(
            filter((active) => !active && !this.el.matches('select')),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.onEnter();
            this.textfield.value.set('');
        });

    public readonly separator = input(this.options.separator);
    public readonly unique = input(this.options.unique);
    public readonly el = tuiInjectElement<HTMLInputElement>();

    public setValue(value: T[]): void {
        this.textfield.value.set('');
        this.onChange(
            this.unique() ? Array.from(new Set(value.reverse())).reverse() : value,
        );
        this.el.dispatchEvent(new Event('input', {bubbles: true}));
    }

    protected onEnter(rawValue = this.textfield.value()): void {
        const value = rawValue.trim();
        const items = this.separator() ? value.split(this.separator()) : [value];

        const valid = items
            .map((item) => tuiSanitizeText(item) as T)
            .filter(
                (item) =>
                    item &&
                    !this.handlers.disabledItemHandler()(item) &&
                    this.handlers.stringify()(item),
            );

        if (!value || !valid.length) {
            return;
        }

        this.setValue([...this.value(), ...valid]);
        this.scrollTo();
    }

    protected onInput(): void {
        this.open.set(!!this.dropdown.content());

        if (this.separator() && this.textfield.value().match(this.separator())) {
            this.onEnter();
        } else {
            this.scrollTo();
        }
    }

    protected onPaste(event: ClipboardEvent | DragEvent): void {
        const input = this.textfield.input();
        const value =
            'dataTransfer' in event
                ? event.dataTransfer?.getData('text/plain') || ''
                : tuiGetClipboardDataText(event);

        if (input) {
            input.nativeElement.value = value;
        }

        this.onEnter(value);
    }

    protected onBackspace(key: string): void {
        // (keydown.backspace) doesn't emit event on empty input in ios safari
        if (key === 'Backspace' && !this.textfield.value() && this.interactive()) {
            if (this.mobile || !this.textfield.item()) {
                this.onChange(this.value().slice(0, -1));
            } else {
                this.el.dispatchEvent(
                    new KeyboardEvent('keydown', {
                        key: 'ArrowLeft',
                        bubbles: true,
                    }),
                );
            }
        }
    }

    protected scrollTo(): void {
        const sign = this.textfield.el.matches('[dir="rtl"] :scope') ? -1 : 1;

        // Allow change detection to run and add new tag to DOM
        setTimeout(() => {
            this.textfield.el.scrollTo({
                left: sign * Number.MAX_SAFE_INTEGER,
                top: Number.MAX_SAFE_INTEGER,
            });
        });
    }
}
