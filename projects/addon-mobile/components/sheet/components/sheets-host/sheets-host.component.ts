import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import {TUI_WINDOW_HEIGHT, TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {takeUntil} from 'rxjs';

import {TuiSheet} from '../../sheet';
import {TuiSheetService} from '../../sheet.service';

@Component({
    selector: 'tui-sheets-host',
    templateUrl: './sheets-host.template.html',
    styleUrls: ['./sheets-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiSheetsHostComponent implements OnInit {
    private readonly service = inject(TuiSheetService);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly cdr = inject(ChangeDetectorRef);
    protected readonly height$ = inject(TUI_WINDOW_HEIGHT);

    protected sheets: ReadonlyArray<TuiSheet<any>> = [];

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    public ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        this.service.sheets$.pipe(takeUntil(this.destroy$)).subscribe(sheets => {
            this.sheets = sheets;
            this.cdr.detectChanges();
        });
    }

    protected close({closeable, $implicit}: TuiSheet<unknown>): void {
        if (closeable) {
            $implicit.complete();
        }
    }
}
