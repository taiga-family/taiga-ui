import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    OnInit,
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
    providers: [TuiDestroyService],
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiSheetsHostComponent implements OnInit {
    sheets: ReadonlyArray<TuiSheet<any>> = [];

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly options: AnimationOptions,
        @Inject(TuiSheetService) private readonly service: TuiSheetService,
        @Inject(TUI_WINDOW_HEIGHT) readonly height$: Observable<number>,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        this.service.sheets$.pipe(takeUntil(this.destroy$)).subscribe(sheets => {
            this.sheets = sheets;
            this.cdr.detectChanges();
        });
    }

    close({closeable, $implicit}: TuiSheet<unknown>): void {
        if (closeable) {
            $implicit.complete();
        }
    }
}
