import {Directive, inject} from '@angular/core';
import {
    TuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';

const O = {skipSelf: true};

@Directive({hostDirectives: [TuiAppearance]})
export class TuiAppearanceProxy {
    private readonly a = inject(TuiAppearance);

    protected readonly f = tuiAppearanceFocus(this.a.tuiAppearanceFocus, O);
    protected readonly m = tuiAppearanceMode(this.a.tuiAppearanceMode, O);
    protected readonly s = tuiAppearanceState(this.a.tuiAppearanceState, O);
}
