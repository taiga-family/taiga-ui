import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiContext} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TUI_PULL_TO_REFRESH_THRESHOLD} from '../pull-to-refresh.providers';

const LOADED_STEP = 8;
const ROTATE_X_STEP = 30;

@Component({
    selector: 'tui-mobile-ios-loader',
    templateUrl: './loader-ios.template.html',
    styleUrls: ['./loader-ios.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileLoaderIOSComponent {
    private readonly context = inject<TuiContext<number>>(POLYMORPHEUS_CONTEXT);
    private readonly threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    readonly steps = 12;

    get finished(): boolean {
        return this.percent >= 100;
    }

    get percent(): number {
        return (this.context.$implicit * 100) / this.threshold;
    }

    isShown(index: number): boolean {
        return this.percent > (index + 1) * LOADED_STEP;
    }

    calculateTransform(index: number): string {
        return `rotate(${index * ROTATE_X_STEP} 50 50)`;
    }

    calculateAnimationBegin(index: number): string {
        return `${(index * LOADED_STEP) / 100}s`;
    }
}

export const TUI_IOS_LOADER = new PolymorpheusComponent(TuiMobileLoaderIOSComponent);
