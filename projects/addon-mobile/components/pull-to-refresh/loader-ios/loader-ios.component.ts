import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_PULL_TO_REFRESH_THRESHOLD} from '@taiga-ui/addon-mobile/components';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

const LOADED_STEP = 8;
const ROTATE_X_STEP = 30;

@Component({
    selector: 'tui-mobile-ios-loader',
    templateUrl: './loader-ios.template.html',
    styleUrls: ['./loader-ios.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileLoaderIOSComponent {
    readonly steps = 12;

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiContextWithImplicit<number>,
        @Inject(TUI_PULL_TO_REFRESH_THRESHOLD) private readonly threshold: number,
    ) {}

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
