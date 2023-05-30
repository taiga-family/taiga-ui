import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Self,
} from '@angular/core';
import {TUI_PARENT_ANIMATION, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-hints-host',
    templateUrl: './hints-host.template.html',
    styleUrls: ['./hints-host.style.less'],
    // So that we do not force OnPush on custom hints
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDestroyService],
    animations: [TUI_PARENT_ANIMATION],
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHintsHostComponent {
    hints: readonly TuiPortalItem[] = [];

    constructor(
        @Inject(TuiHintService) hints$: Observable<readonly TuiPortalItem[]>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        hints$.pipe(takeUntil(destroy$)).subscribe(hints => {
            this.hints = hints;
            cdr.detectChanges();
        });
    }
}
