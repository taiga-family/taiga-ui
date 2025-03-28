import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

export const TUI_SHEET_DIALOG_CLOSE = 'tui-sheet-dialog-close';

@Directive({
    selector: '[tuiSheetDialogClose]',
})
export class TuiSheetDialogCloseDirective {
    @Output()
    readonly tuiSheetDialogClose: Observable<unknown> = tuiTypedFromEvent(
        this.el.nativeElement,
        TUI_SHEET_DIALOG_CLOSE,
    ).pipe(tuiZonefree(this.zone));

    constructor(
        @Inject(NgZone) private readonly zone: NgZone,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {}
}
