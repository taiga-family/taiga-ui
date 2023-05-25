import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    INJECTOR,
    Injector,
    Self,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiDestroyService} from '@taiga-ui/cdk/services/destroy.service';
import {TUI_ALERTS} from '@taiga-ui/cdk/tokens';
import {TuiDialog, TuiMapper} from '@taiga-ui/cdk/types';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {combineLatest, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-alert-host',
    templateUrl: './alert-host.template.html',
    styleUrls: ['./alert-host.style.less'],
    // So that we do not force OnPush on custom alerts
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [TUI_PARENT_ANIMATION],
    encapsulation: ViewEncapsulation.None,
})
export class TuiAlertHostComponent<T extends TuiDialog<unknown, unknown>> {
    public alerts: readonly (readonly T[])[] = [];

    constructor(
        @Inject(TUI_ALERTS) allAlerts: Array<Observable<readonly T[]>>,
        @Inject(INJECTOR) private readonly injector: Injector,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        combineLatest(allAlerts)
            .pipe(takeUntil(destroy$))
            .subscribe(alerts => {
                this.alerts = alerts;
                cdr.detectChanges();
            });
    }

    readonly mapper: TuiMapper<unknown, Injector> = useValue =>
        Injector.create({
            providers: [
                {
                    provide: POLYMORPHEUS_CONTEXT,
                    useValue,
                },
            ],
            parent: this.injector,
        });
}
