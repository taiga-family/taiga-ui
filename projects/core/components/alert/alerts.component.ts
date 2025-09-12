import {AsyncPipe, NgComponentOutlet, NgFor} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    INJECTOR,
    Injector,
    type Type,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAnimatedParent} from '@taiga-ui/cdk/directives/animated';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiMapper} from '@taiga-ui/cdk/types';
// eslint-disable-next-line no-restricted-imports
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {identity} from 'rxjs';

import {TUI_ALERTS_GROUPED} from './alert.tokens';

@Component({
    selector: 'tui-alerts',
    imports: [AsyncPipe, NgComponentOutlet, NgFor, TuiAnimatedParent, TuiMapperPipe],
    templateUrl: './alerts.template.html',
    styleUrls: ['./alerts.style.less'],
    encapsulation: ViewEncapsulation.None,
    // So that we do not force OnPush on custom alerts
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiAlerts {
    private readonly injector = inject(INJECTOR);

    protected readonly alerts$ = inject(TUI_ALERTS_GROUPED);
    protected readonly trackBy = identity;
    protected readonly mapper: TuiMapper<[Type<any>], Injector> = (useValue) =>
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
