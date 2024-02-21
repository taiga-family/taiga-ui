import {ChangeDetectionStrategy, Component, inject, NgZone} from '@angular/core';
import {tuiClamp} from '@taiga-ui/cdk';
import {tuiZonefulMap} from '@taiga-ui/core';

import {TUI_SHEET, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Component({
    selector: 'tui-sheet-bar',
    templateUrl: './sheet-bar.template.html',
    styleUrls: ['./sheet-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSheetBarComponent {
    private readonly sheet = inject(TUI_SHEET);
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly zone = inject(NgZone);

    readonly rotate$ = this.scroll$.pipe(
        tuiZonefulMap(y => tuiClamp(10 - (y - this.stop) / 5, 0, 10), this.zone),
    );

    private get stop(): number {
        return this.sheet.stops[0] || 0;
    }
}
