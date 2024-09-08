import type {AfterViewInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

export const TUI_SHEET_CLOSE = 'tui-sheet-close';
export const TUI_SHEET_ID = 'tui-sheet-id';

@Component({
    standalone: false,
    selector: '[tuiSheetHeading]',
    templateUrl: './sheet-heading.template.html',
    styleUrls: ['./sheet-heading.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSheetHeadingComponent implements AfterViewInit {
    private readonly el = tuiInjectElement();
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly autoId = tuiInjectId();

    public ngAfterViewInit(): void {
        this.el.dispatchEvent(
            new CustomEvent(TUI_SHEET_ID, {bubbles: true, detail: this.autoId}),
        );
    }

    protected onClick(): void {
        this.el.dispatchEvent(new CustomEvent(TUI_SHEET_CLOSE, {bubbles: true}));
    }
}
