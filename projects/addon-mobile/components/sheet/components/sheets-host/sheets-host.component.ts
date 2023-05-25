import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Self,
} from '@angular/core';
import {TUI_WINDOW_HEIGHT, TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_ANIMATION_OPTIONS, tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiSheet} from '../../sheet';
import {TuiSheetService} from '../../sheet.service';

@Component({
    selector: 'tui-sheets-host',
    templateUrl: './sheets-host.template.html',
    styleUrls: ['./sheets-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiSheetsHostComponent {
    sheets: ReadonlyArray<TuiSheet<any>> = [];

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly options: AnimationOptions,
        @Inject(TuiSheetService) service: TuiSheetService,
        @Inject(TUI_WINDOW_HEIGHT) readonly height$: Observable<number>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        service.sheets$.pipe(takeUntil(destroy$)).subscribe(sheets => {
            this.sheets = sheets;
            cdr.detectChanges();
        });
    }

    close({closeable, $implicit}: TuiSheet<unknown>): void {
        if (closeable) {
            $implicit.complete();
        }
    }
}
