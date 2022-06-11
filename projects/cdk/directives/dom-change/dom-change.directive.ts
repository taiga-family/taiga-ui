import {
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    OnDestroy,
    Output,
} from '@angular/core';

import {TUI_DOM_CHANGE_OPTIONS, TuiDomChangeOptions} from './dom-change.options';

@Directive({selector: '[tuiDomChange]'})
export class TuiDomChangeDirective implements OnDestroy {
    private readonly changes: MutationObserver;

    @Output()
    tuiDomChange = new EventEmitter<MutationRecord>();

    constructor(
        @Inject(TUI_DOM_CHANGE_OPTIONS) private readonly options: TuiDomChangeOptions,
        @Inject(ElementRef) private readonly elementRef: ElementRef,
    ) {
        this.changes = new MutationObserver((mutations: MutationRecord[]) =>
            mutations.forEach((mutation: MutationRecord) =>
                this.tuiDomChange.emit(mutation),
            ),
        );

        this.changes.observe(this.elementRef.nativeElement, this.options);
    }

    ngOnDestroy(): void {
        this.changes.disconnect();
    }
}
