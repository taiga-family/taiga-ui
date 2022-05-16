import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    INJECTOR,
    Injector,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TUI_ALERTS} from '@taiga-ui/cdk/tokens';
import {TuiDialog, TuiMapper} from '@taiga-ui/cdk/types';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-alert-host',
    templateUrl: './alert-host.template.html',
    styleUrls: ['./alert-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
    encapsulation: ViewEncapsulation.None,
})
export class TuiAlertHostComponent<T extends TuiDialog<unknown, unknown>> {
    constructor(
        @Inject(TUI_ALERTS) readonly alerts: Array<Observable<readonly T[]>>,
        @Inject(INJECTOR) private readonly injector: Injector,
    ) {}

    readonly mapper: TuiMapper<any, Injector> = useValue =>
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
