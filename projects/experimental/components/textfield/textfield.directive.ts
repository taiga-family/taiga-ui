import {Directive, DoCheck, ElementRef, inject, Input} from '@angular/core';
import {TuiIdService, TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import {TuiAppearanceDirective, TuiInteractiveStateT} from '@taiga-ui/core';

import {TuiTextfieldComponent} from './textfield.component';

@Directive({
    standalone: true,
    selector: 'input[tuiTextfield]',
    host: {
        '[id]': 'el.id || this.idService.generate()',
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
    protected readonly textfield = inject(TuiTextfieldComponent);

    @Input()
    public readOnly = false;

    @Input()
    public invalid: boolean | null = null;

    @Input()
    public focused: boolean | null = null;

    @Input()
    public state: TuiInteractiveStateT | null = null;

    protected readonly idService = inject(TuiIdService);
    public readonly el: HTMLInputElement = inject(ElementRef).nativeElement;

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.textfield.options.appearance;
        this.appearance.tuiAppearanceFocus = this.focused ?? this.textfield.focused;
        this.appearance.tuiAppearanceState = this.state;
    }

    public setValue(value: string): void {
        this.el.value = value;
        this.el.dispatchEvent(new Event('input'));
    }
}
