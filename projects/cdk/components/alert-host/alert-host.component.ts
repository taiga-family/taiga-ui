import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    INJECTOR,
    Injector,
    OnInit,
    Self,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
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
    providers: [TuiDestroyService],
    animations: [TUI_PARENT_ANIMATION],
    encapsulation: ViewEncapsulation.None,
})
export class TuiAlertHostComponent<T extends TuiDialog<unknown, unknown>>
    implements OnInit
{
    alerts: ReadonlyArray<readonly T[]> = [];

    constructor(
        @Inject(TUI_ALERTS) private readonly allAlerts: Array<Observable<readonly T[]>>,
        @Inject(INJECTOR) private readonly injector: Injector,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        combineLatest(this.allAlerts)
            .pipe(takeUntil(this.destroy$))
            .subscribe(alerts => {
                this.alerts = alerts;
                this.cdr.detectChanges();
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
