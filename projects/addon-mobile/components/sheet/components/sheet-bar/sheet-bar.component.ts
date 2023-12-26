import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {tuiClamp} from '@taiga-ui/cdk';
import {tuiZonefulMap} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TuiSheetRequiredProps} from '../../sheet';
import {TUI_SHEET, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Component({
    selector: 'tui-sheet-bar',
    templateUrl: './sheet-bar.template.html',
    styleUrls: ['./sheet-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSheetBarComponent {
    readonly rotate$ = this.scroll$.pipe(
        tuiZonefulMap(y => tuiClamp(10 - (y - this.stop) / 5, 0, 10)),
    );

    constructor(
        @Inject(TUI_SHEET) private readonly sheet: TuiSheetRequiredProps,
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
    ) {}

    private get stop(): number {
        return this.sheet.stops[0] || 0;
    }
}
