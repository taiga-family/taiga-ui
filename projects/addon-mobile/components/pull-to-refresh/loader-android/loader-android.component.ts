import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TUI_PULL_TO_REFRESH_THRESHOLD} from '../pull-to-refresh.providers';
import {MICRO_OFFSET} from '../pull-to-refresh.service';

const ROTATE_X_DEFAULT = 180;
const ROTATE_X_MAX = 500;
const ROTATE_X_MULTIPLIER = 2.3;

@Component({
    selector: 'tui-mobile-android-loader',
    imports: [TuiLoader],
    templateUrl: './loader-android.template.html',
    styleUrl: './loader-android.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._visible]': 'percent',
        '[class._dropped]': 'dropped',
        '[style.transform]': 'hostTransform',
    },
})
export class TuiMobileLoaderAndroid {
    readonly #context = injectContext<TuiContext<number>>();
    readonly #threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    protected get percent(): number {
        return (this.#context.$implicit * 100) / this.#threshold;
    }

    protected get dropped(): boolean {
        return (
            this.#context.$implicit <= MICRO_OFFSET ||
            this.#context.$implicit === this.#threshold
        );
    }

    protected get hostTransform(): string {
        return `translateY(${Math.min(this.#context.$implicit, this.#threshold * 1.5)}px)`;
    }

    protected get opacity(): number {
        return this.#context.$implicit / (this.#threshold * 1.5);
    }

    protected get transform(): string {
        const rotateX = Math.min(
            ROTATE_X_DEFAULT + this.percent * ROTATE_X_MULTIPLIER,
            ROTATE_X_MAX,
        );

        return `rotate(${rotateX} 0 0)`;
    }
}

export const TUI_ANDROID_LOADER = new PolymorpheusComponent(TuiMobileLoaderAndroid);
