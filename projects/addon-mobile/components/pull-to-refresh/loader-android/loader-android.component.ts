import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {TuiContext} from '@taiga-ui/cdk';
import {TuiLoaderModule} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TUI_PULL_TO_REFRESH_THRESHOLD} from '../pull-to-refresh.providers';
import {MICRO_OFFSET} from '../pull-to-refresh.service';

const ROTATE_X_DEFAULT = 180;
const ROTATE_X_MAX = 500;
const ROTATE_X_MULTIPLIER = 2.3;

@Component({
    standalone: true,
    selector: 'tui-mobile-android-loader',
    imports: [NgIf, TuiLoaderModule],
    templateUrl: './loader-android.template.html',
    styleUrls: ['./loader-android.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileLoaderAndroidComponent {
    private readonly context = inject<TuiContext<number>>(POLYMORPHEUS_CONTEXT);
    private readonly threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    protected get transform(): string {
        const rotateX = Math.min(
            ROTATE_X_DEFAULT + this.percent * ROTATE_X_MULTIPLIER,
            ROTATE_X_MAX,
        );

        return `rotate(${rotateX} 0 0)`;
    }

    @HostBinding('class._visible')
    protected get percent(): number {
        return (this.context.$implicit * 100) / this.threshold;
    }

    protected get opacity(): number {
        return this.context.$implicit / (this.threshold * 1.5);
    }

    @HostBinding('class._dropped')
    protected get dropped(): boolean {
        return (
            this.context.$implicit <= MICRO_OFFSET ||
            this.context.$implicit === this.threshold
        );
    }

    @HostBinding('style.transform')
    protected get hostTransform(): string {
        return `translateY(${Math.min(this.context.$implicit, this.threshold * 1.5)}px)`;
    }
}

export const TUI_ANDROID_LOADER = new PolymorpheusComponent(
    TuiMobileLoaderAndroidComponent,
);
