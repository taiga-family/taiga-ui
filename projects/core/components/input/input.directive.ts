import {computed, Directive, inject, input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {
    TUI_TEXTFIELD_OPTIONS,
    tuiAsTextfieldAccessor,
    type TuiTextfieldAccessor,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {type TuiInteractiveState} from '@taiga-ui/core/types';

@Directive({
    selector: 'input[tuiInput]',
    providers: [tuiAsTextfieldAccessor(TuiInputDirective)],
    hostDirectives: [TuiNativeValidator],
    host: {
        tuiInput: '',
        '[id]': 'textfield.id',
        '[readOnly]': 'readOnly()',
        '[class._empty]': 'value() === ""',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
})
export class TuiInputDirective<T> implements TuiTextfieldAccessor<T> {
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly control = inject(NgControl, {optional: true});
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    protected readonly s = tuiAppearanceState(computed(() => this.state()));
    protected readonly m = tuiAppearanceMode(computed(() => this.mode()));
    protected readonly f = tuiAppearanceFocus(
        computed(() => this.focused() ?? this.textfield.focused()),
    );

    public readonly readOnly = input(false);
    public readonly invalid = input<boolean | null>(null);
    public readonly focused = input<boolean | null>(null);
    public readonly state = input<TuiInteractiveState | null>(null);

    public readonly value = tuiValue(this.el);
    public readonly mode = computed<string | null>(() => {
        if (this.readOnly()) {
            return 'readonly';
        }

        if (this.invalid() === false) {
            return 'valid';
        }

        if (this.invalid()) {
            return 'invalid';
        }

        return null;
    });

    public setValue(value: T | null): void {
        this.el.focus();
        this.el.select();

        if (value == null) {
            this.el.ownerDocument.execCommand('delete');

            // see https://github.com/taiga-family/taiga-ui/issues/11634
            // ensure non-erasable affixes actually deleted
            this.el.value = '';
        } else {
            this.el.ownerDocument.execCommand(
                'insertText',
                false,
                this.handlers.stringify()(value),
            );
        }
    }
}

@Directive({
    hostDirectives: [
        {
            directive: TuiInputDirective,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
})
export class TuiWithInput {}
