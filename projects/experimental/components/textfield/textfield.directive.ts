import {Directive, DoCheck, ElementRef, inject, Input} from '@angular/core';
import {TuiIdService, TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import {TuiInteractiveStateT} from '@taiga-ui/core';
import {TuiAppearanceDirective} from '@taiga-ui/experimental/directives/appearance';

import {TuiTextfieldComponent} from './textfield.component';

@Directive({
    standalone: true,
    selector: 'input[tuiTextfieldd]',
    host: {
        '[id]': 'input.id || this.idService.generate()',
        '[placeholder]': 'input.placeholder || " "',
        '[attr.data-invalid]': 'invalid',
    },
    hostDirectives: [TuiNativeValidatorDirective, TuiAppearanceDirective],
})
export class TuiTextfieldDirective implements DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly appearance = inject(TuiAppearanceDirective);

    @Input()
    invalid: boolean | null = null;

    @Input()
    focused: boolean | null = null;

    @Input()
    state: TuiInteractiveStateT | null = null;

    readonly idService = inject(TuiIdService);
    readonly input: HTMLInputElement = inject(ElementRef).nativeElement;

    ngDoCheck(): void {
        this.appearance.tuiAppearance = this.textfield.options.appearance;
        this.appearance.tuiAppearanceFocus = this.focused ?? this.textfield.focused;
        this.appearance.tuiAppearanceState = this.state;
    }
}
