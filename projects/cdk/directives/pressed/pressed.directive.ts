import {Directive, ElementRef, inject, Output} from '@angular/core';
import {tuiPressedObservable} from '@taiga-ui/cdk/observables';
import {TUI_TAKE_ONLY_TRUSTED_EVENTS} from '@taiga-ui/cdk/tokens';

@Directive({
    selector: '[tuiPressedChange]',
})
export class TuiPressedDirective {
    private readonly el: Element = inject(ElementRef).nativeElement;
    private readonly takeOnlyTrustedEvents = inject(TUI_TAKE_ONLY_TRUSTED_EVENTS);

    @Output()
    readonly tuiPressedChange = tuiPressedObservable(this.el, {
        onlyTrusted: this.takeOnlyTrustedEvents,
    });
}
