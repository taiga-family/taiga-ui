import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core';

export const TUI_SHEET_CLOSE = 'tui-sheet-close';
export const TUI_SHEET_ID = 'tui-sheet-id';

@Component({
    selector: '[tuiSheetHeading]',
    templateUrl: './sheet-heading.template.html',
    styleUrls: ['./sheet-heading.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSheetHeadingComponent implements AfterViewInit {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly id = inject(TuiIdService).generate();

    public ngAfterViewInit(): void {
        this.el.dispatchEvent(
            new CustomEvent(TUI_SHEET_ID, {bubbles: true, detail: this.id}),
        );
    }

    protected onClick(): void {
        this.el.dispatchEvent(new CustomEvent(TUI_SHEET_CLOSE, {bubbles: true}));
    }
}
