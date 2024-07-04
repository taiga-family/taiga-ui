import {Directive, DoCheck, inject, Input} from '@angular/core';
import {TuiIdService, tuiInjectElement} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/directives';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiTextfieldComponent} from './textfield.component';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive()
export class TuiTextfieldBase implements DoCheck {
    private readonly appearance = inject(TuiAppearance);
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

    public get mode(): string | null {
        if (this.readOnly) {
            return 'readonly';
        }

        if (this.invalid === false) {
            return 'valid';
        }

        if (this.invalid) {
            return 'invalid';
        }

        return null;
    }

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
