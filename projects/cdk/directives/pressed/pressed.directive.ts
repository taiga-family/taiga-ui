import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {tuiPressedObservable} from '@taiga-ui/cdk/observables';
import {TUI_TAKE_ONLY_TRUSTED_EVENTS} from '@taiga-ui/cdk/tokens';

@Directive({
    selector: `[tuiPressedChange]`,
})
export class TuiPressedDirective {
    @Output()
    readonly tuiPressedChange = tuiPressedObservable(this.elementRef.nativeElement, {
        onlyTrusted: this.takeOnlyTrustedEvents,
    });

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(TUI_TAKE_ONLY_TRUSTED_EVENTS)
        private readonly takeOnlyTrustedEvents: boolean,
    ) {}
}
