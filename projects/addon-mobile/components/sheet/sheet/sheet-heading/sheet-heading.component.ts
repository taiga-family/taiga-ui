import {Component, ElementRef, Inject} from '@angular/core';
import {TUI_CLOSE_WORD} from '@taiga-ui/core';
import {Observable} from 'rxjs';

export const TUI_SHEET_CLOSE = 'tui-sheet-close';

@Component({
    selector: '[tuiSheetHeading]',
    templateUrl: 'sheet-heading.template.html',
    styleUrls: ['sheet-heading.style.less'],
})
export class TuiSheetHeadingComponent {
    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
    ) {}

    onClick() {
        this.elementRef.nativeElement.dispatchEvent(
            new CustomEvent(TUI_SHEET_CLOSE, {bubbles: true}),
        );
    }
}
