import {Directive, inject, Output} from '@angular/core';
import {tuiPressedObservable} from '@taiga-ui/cdk/observables';
import {TUI_TAKE_ONLY_TRUSTED_EVENTS} from '@taiga-ui/cdk/tokens';
import {tuiNativeElement} from '@taiga-ui/cdk/utils';

@Directive({
    selector: '[tuiPressedChange]',
})
export class TuiPressedDirective {
    private readonly el = tuiNativeElement();
    private readonly takeOnlyTrustedEvents = inject(TUI_TAKE_ONLY_TRUSTED_EVENTS);

    @Output()
    public readonly tuiPressedChange = tuiPressedObservable(this.el, {
        onlyTrusted: this.takeOnlyTrustedEvents,
    });
}
