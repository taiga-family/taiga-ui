import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/core/animations';
import type {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';

@Component({
    selector: 'tui-hints-host',
    templateUrl: './hints-host.template.html',
    styleUrls: ['./hints-host.style.less'],
    // So that we do not force OnPush on custom hints
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [TUI_PARENT_ANIMATION],
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHintsHostComponent implements OnInit {
    private readonly hints$ = inject(TuiHintService);
    private readonly destroy$ = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);

    protected hints: readonly TuiPortalItem[] = [];

    public ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        this.hints$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(hints => {
            this.hints = hints;
            this.cdr.detectChanges();
        });
    }
}
