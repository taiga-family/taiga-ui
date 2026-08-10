import {computed, Directive, effect, inject, INJECTOR, input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiId} from '@taiga-ui/cdk/directives/id';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
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
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';
import {type TuiInteractiveState} from '@taiga-ui/core/types';

@Directive({
    selector: 'input[tuiInput]',
    providers: [tuiAsTextfieldAccessor(TuiInputDirective)],
    hostDirectives: [TuiNativeValidator, TuiId],
    host: {
        tuiInput: '',
        '[attr.role]': 'dropdown.content() && !el.matches("select") ? "combobox" : null',
        '[class._empty]': 'value() === ""',
        '[readOnly]': 'readOnly()',
        '(focusin)': '0',
        '(focusout)': '0',
        '(input)': '0',
    },
})
export class TuiInputDirective<T> implements TuiTextfieldAccessor<T> {
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly control = inject(NgControl, {optional: true});
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);

    protected readonly s = tuiAppearanceState(
        computed(() => this.state() ?? this.textfield.tuiAppearanceState()),
    );

    protected readonly m = tuiAppearanceMode(computed(() => this.mode()));

    // TODO(v6): move to {@link TuiTextfieldComponent}
    protected readonly f = tuiAppearanceFocus(
        computed(
            () =>
                this.focused() ??
                this.textfield.tuiAppearanceFocus() ??
                this.textfield.focused(),
        ),
    );

    public readonly readOnly = input(false);

    /**
     * @deprecated use `<tui-textfield [invalid]="..." />` instead
     * TODO(v6): delete
     */
    public readonly invalid = input<boolean | null>(null);

    /**
     * @deprecated use `<tui-textfield [tuiAppearanceFocus]="..." />` instead
     * TODO(v6): delete
     */
    public readonly focused = input<boolean | null>(null);

    /**
     * @deprecated use `<tui-textfield [tuiAppearanceState]="..." />` instead
     * TODO(v6): delete
     */
    public readonly state = input<TuiInteractiveState | null>(null);
    public readonly value = tuiValue(this.el);

    public readonly mode = computed<string | null>(() => {
        const invalid = this.textfield.invalid() ?? this.invalid();

        if (this.readOnly()) {
            return 'readonly';
        }

        if (invalid === false) {
            return 'valid';
        }

        return invalid ? 'invalid' : null;
    });

    /**
     * Temporary workaround until TuiControl has deprecated `pseudoInvalid` property
     * We cannot inject `TuiTextfieldComponent` (@taiga-ui/core) inside `TuiControl` (`@taiga-ui/cdk`)
     * TODO(v6): remove all logic inside constructor
     */
    constructor() {
        const injector = inject(INJECTOR);
        const invalid = computed(() => this.textfield.invalid() ?? this.invalid());

        effect(() => {
            const control = injector.get(TuiControl, null, {self: true});

            if (control) {
                tuiSetSignal(control.pseudoInvalid, invalid());
            }
        });
    }

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
