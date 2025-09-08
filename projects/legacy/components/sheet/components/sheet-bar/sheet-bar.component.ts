import {ChangeDetectionStrategy, Component, inject, NgZone} from '@angular/core';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {distinctUntilChanged, map} from 'rxjs';

import {TUI_SHEET, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Component({
    standalone: false,
    selector: 'tui-sheet-bar',
    templateUrl: './sheet-bar.template.html',
    styleUrls: ['./sheet-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSheetBarComponent {
    private readonly sheet = inject(TUI_SHEET);
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly zone = inject(NgZone);

    protected readonly rotate$ = this.scroll$.pipe(
        map((y) => tuiClamp(10 - (y - this.stop) / 5, 0, 10)),
        distinctUntilChanged(),
        tuiZonefull(this.zone),
    );

    protected getTransform(rotate: number): string {
        return `rotate(${rotate}deg)`;
    }

    private get stop(): number {
        return this.sheet.stops[0] || 0;
    }
}
