import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {shouldCall} from '@tinkoff/ng-event-plugins';

import {TuiElasticContainerDirective} from './elastic-container.directive';

@Component({
    standalone: true,
    selector: 'tui-elastic-container',
    templateUrl: './elastic-container.component.html',
    styleUrls: ['./elastic-container.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiElasticContainerDirective],
})
export class TuiElasticContainerComponent {
    @HostBinding('style.height.px')
    protected height = NaN;

    @HostBinding('class._transitioning')
    protected transitions = 0;

    @shouldCall(name => name === 'height')
    protected onAnimation(_name: string, count: number): void {
        this.transitions += count;
    }
}
