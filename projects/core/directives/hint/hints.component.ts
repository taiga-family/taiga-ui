import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    type OnInit,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimatedParent} from '@taiga-ui/cdk/directives/animated';
import {type TuiPortalItem} from '@taiga-ui/core/types';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiHintService} from './hint.service';

@Component({
    selector: 'tui-hints',
    imports: [PolymorpheusOutlet, TuiActiveZone, TuiAnimatedParent],
    templateUrl: './hints.template.html',
    styleUrl: './hints.style.less',
    // So that we do not force OnPush on custom hints
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHints implements OnInit {
    private readonly hints$ = inject(TuiHintService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);

    protected hints: readonly TuiPortalItem[] = [];

    public ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        this.hints$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hints) => {
            this.hints = hints;
            this.cdr.detectChanges();
        });
    }
}
