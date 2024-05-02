import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_WINDOW_HEIGHT} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';

import type {TuiSheet} from '../../sheet';
import {TuiSheetService} from '../../sheet.service';

@Component({
    selector: 'tui-sheets-host',
    templateUrl: './sheets-host.template.html',
    styleUrls: ['./sheets-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiSheetsHostComponent implements OnInit {
    private readonly service = inject(TuiSheetService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);
    protected readonly height$ = inject(TUI_WINDOW_HEIGHT);

    protected sheets: ReadonlyArray<TuiSheet<any>> = [];

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    public ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        this.service.sheets$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(sheets => {
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
