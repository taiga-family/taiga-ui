import {Component, Inject, Input, NgZone} from '@angular/core';
import {clamp, tuiDefaultProp} from '@taiga-ui/cdk';
import {tuiZonefulMap} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TUI_SHEET_SCROLL} from '../sheet.providers';

@Component({
    selector: 'tui-sheet-bar',
    templateUrl: 'sheet-bar.template.html',
    styleUrls: ['sheet-bar.style.less'],
})
export class TuiSheetBarComponent {
    @Input()
    @tuiDefaultProp()
    stop = 0;

    readonly rotate$ = this.scroll$.pipe(
        tuiZonefulMap(
            scrollTop => clamp(10 - (scrollTop - this.stop) / 5, 0, 10),
            this.ngZone,
        ),
    );

    constructor(
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {}
}
