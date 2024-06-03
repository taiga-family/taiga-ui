import type {DoCheck} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {TuiIdService, tuiInjectElement, TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import {TuiAppearanceDirective} from '@taiga-ui/core/directives/appearance';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiTextfieldComponent} from './textfield.component';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive({
    standalone: true,
    selector: 'input[tuiTextfield]',
    host: {
        '[id]': 'el.id || id',
        '[readOnly]': 'readOnly',
        '[class._readonly]': 'readOnly',
        '[class._empty]': 'el.value === ""',
        '[attr.data-invalid]': 'invalid',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
    hostDirectives: [TuiNativeValidatorDirective, TuiAppearanceDirective],
})
export class TuiTextfieldDirective implements DoCheck {
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly id = inject(TuiIdService).generate();
    protected readonly el = tuiInjectElement<HTMLInputElement>();

    @Input()
    public readOnly = false;

    @Input()
    public invalid: boolean | null = null;

    @Input()
    public focused: boolean | null = null;

    @Input()
    public state: TuiInteractiveState | null = null;

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance;
        this.appearance.tuiAppearanceFocus = this.focused ?? this.textfield.focused;
        this.appearance.tuiAppearanceState = this.state;
    }

    public setValue(value: string): void {
        this.el.value = value;
        this.el.dispatchEvent(new Event('input'));
    }
}
