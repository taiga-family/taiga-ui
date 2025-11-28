import {ChangeDetectionStrategy, Component} from '@angular/core';
import {shouldCall} from '@taiga-ui/event-plugins';

import {TuiElasticContainerDirective} from './elastic-container.directive';

@Component({
    selector: 'tui-elastic-container',
    imports: [TuiElasticContainerDirective],
    templateUrl: './elastic-container.component.html',
    styleUrl: './elastic-container.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[style.block-size]': 'transitions ? "auto" : height'},
})
export class TuiElasticContainer {
    protected height = '';
    protected transitions = 0;

    @shouldCall((name) => name === 'height')
    protected onAnimation(_name: string, count: number): void {
        this.transitions += count;
    }
}
