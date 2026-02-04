import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk/utils';

import {TuiElasticContainerDirective} from './elastic-container.directive';

@Component({
    selector: 'tui-elastic-container',
    imports: [TuiElasticContainerDirective],
    templateUrl: './elastic-container.component.html',
    styleUrl: './elastic-container.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[style.block-size]': 'transitions() ? "auto" : height()'},
})
export class TuiElasticContainer {
    protected height = signal('');
    protected transitions = signal(0);

    protected onAnimation(name: string, count: number): void {
        if (name === 'height') {
            this.transitions.update((value) => value + count);
        }
    }

    protected updateHeight(height: number): void {
        this.height.set(tuiPx(height));
    }
}
