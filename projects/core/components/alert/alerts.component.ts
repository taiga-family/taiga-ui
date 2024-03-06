import {CommonModule} from '@angular/common';
import type {Type} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    INJECTOR,
    Injector,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiTypedMapper} from '@taiga-ui/cdk';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/core/animations';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {identity} from 'rxjs';

import {TUI_ALERTS_GROUPED} from './alert.tokens';

@Component({
    standalone: true,
    selector: 'tui-alerts',
    imports: [CommonModule, TuiMapperPipeModule],
    templateUrl: './alerts.template.html',
    styleUrls: ['./alerts.style.less'],
    encapsulation: ViewEncapsulation.None,
    // So that we do not force OnPush on custom alerts
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiAlertsComponent {
    private readonly injector = inject(INJECTOR);

    protected readonly alerts$ = inject(TUI_ALERTS_GROUPED);
    protected readonly trackBy = identity;
    protected readonly mapper: TuiTypedMapper<[Type<any>], Injector> = useValue =>
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
