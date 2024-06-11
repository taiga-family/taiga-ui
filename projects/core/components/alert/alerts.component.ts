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
import type {TuiMapper} from '@taiga-ui/cdk';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {tuiParentAnimation} from '@taiga-ui/core/animations';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {identity} from 'rxjs';

import {TUI_ALERTS_GROUPED} from './alert.tokens';

@Component({
    standalone: true,
    selector: 'tui-alerts',
    imports: [CommonModule, TuiMapperPipe],
    templateUrl: './alerts.template.html',
    styleUrls: ['./alerts.style.less'],
    encapsulation: ViewEncapsulation.None,
    // So that we do not force OnPush on custom alerts
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [tuiParentAnimation],
})
export class TuiAlertsComponent {
    private readonly injector = inject(INJECTOR);

    protected readonly alerts$ = inject(TUI_ALERTS_GROUPED);
    protected readonly trackBy = identity;
    protected readonly mapper: TuiMapper<[Type<any>], Injector> = useValue =>
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
