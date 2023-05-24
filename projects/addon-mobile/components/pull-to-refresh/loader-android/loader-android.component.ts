import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {TUI_PULL_TO_REFRESH_THRESHOLD} from '@taiga-ui/addon-mobile/components';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {MICRO_OFFSET} from '../pull-to-refresh.service';

const ROTATE_X_DEFAULT = 180;
const ROTATE_X_MAX = 500;
const ROTATE_X_MULTIPLIER = 2.3;

@Component({
    selector: 'tui-mobile-android-loader',
    templateUrl: './loader-android.template.html',
    styleUrls: ['./loader-android.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileLoaderAndroidComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiContextWithImplicit<number>,
        @Inject(TUI_PULL_TO_REFRESH_THRESHOLD) private readonly threshold: number,
    ) {}

    get transform(): string {
        const rotateX = Math.min(
            ROTATE_X_DEFAULT + this.percent * ROTATE_X_MULTIPLIER,
            ROTATE_X_MAX,
        );

        return `rotate(${rotateX} 0 0)`;
    }

    @HostBinding('class._visible')
    get percent(): number {
        return (this.context.$implicit * 100) / this.threshold;
    }

    get opacity(): number {
        return this.context.$implicit / (this.threshold * 1.5);
    }

    @HostBinding('class._dropped')
    get dropped(): boolean {
        return (
            this.context.$implicit <= MICRO_OFFSET ||
            this.context.$implicit === this.threshold
        );
    }

    @HostBinding('style.transform')
    get hostTransform(): string {
        return `translateY(${Math.min(this.context.$implicit, this.threshold * 1.5)}px)`;
    }
}

export const TUI_ANDROID_LOADER = new PolymorpheusComponent(
    TuiMobileLoaderAndroidComponent,
);
