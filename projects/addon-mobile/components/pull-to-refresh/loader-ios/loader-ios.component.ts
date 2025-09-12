import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TUI_PULL_TO_REFRESH_THRESHOLD} from '../pull-to-refresh.providers';

const LOADED_STEP = 8;
const ROTATE_X_STEP = 30;

@Component({
    selector: 'tui-mobile-ios-loader',
    imports: [NgIf, TuiRepeatTimes],
    templateUrl: './loader-ios.template.html',
    styleUrls: ['./loader-ios.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileLoaderIOS {
    private readonly context = injectContext<TuiContext<number>>();
    private readonly threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    protected readonly steps = 12;

    protected get finished(): boolean {
        return this.percent >= 100;
    }

    protected get percent(): number {
        return (this.context.$implicit * 100) / this.threshold;
    }

    protected isShown(index: number): boolean {
        return this.percent > (index + 1) * LOADED_STEP;
    }

    protected calculateTransform(index: number): string {
        return `rotate(${index * ROTATE_X_STEP} 50 50)`;
    }

    protected calculateAnimationBegin(index: number): string {
        return `${(index * LOADED_STEP) / 100}s`;
    }
}

export const TUI_IOS_LOADER = new PolymorpheusComponent(TuiMobileLoaderIOS);
