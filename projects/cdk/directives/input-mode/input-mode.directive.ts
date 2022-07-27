import {Attribute, Directive, HostBinding, Inject, Input} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {TuiInputModeT} from '@taiga-ui/cdk/types';

/**
 * Abstraction over `inputMode` attribute
 */
@Directive({
    selector: `input[tuiInputMode]`,
})
export class TuiInputModeDirective {
    @Input(`tuiInputMode`)
    @HostBinding(`attr.inputmode`)
    @HostBinding(`attr.x-inputmode`)
    mode: TuiInputModeT = `text`;

    constructor(
        @Attribute(`pattern`) private readonly pattern: string | null,
        @Inject(TUI_IS_IOS) private readonly isIOS: boolean,
    ) {}

    @HostBinding(`attr.pattern`)
    get patternAttribute(): string | null {
        return this.mode === `numeric` && this.isIOS && !this.pattern
            ? `[0-9]*`
            : this.pattern;
    }
}
