import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_PLATFORM, tuiIsNumber, tuiIsPresent, TuiPlatform} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_ANIMATION_OPTIONS,
    TUI_MODE,
    TuiBrightness,
    tuiExpressiveEntrance,
    TuiSizeS,
    TuiSizeXL,
} from '@taiga-ui/core';
import {TuiBadgeAppearance} from '@taiga-ui/experimental/types';
import {PolymorpheusPrimitive} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
    providers: [MODE_PROVIDER],
    animations: [tuiExpressiveEntrance],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    value: PolymorpheusPrimitive;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeS | TuiSizeXL = 'l';

    @Input()
    @HostBinding('attr.data-appearance')
    appearance: TuiBadgeAppearance = 'default';

    @Input()
    @HostBinding('class._hoverable')
    hoverable = false;

    @HostBinding('attr.data-platform')
    platform = this.tuiPlatform;

    @HostBinding('@tuiExpressiveEntrance')
    readonly entrance = this.animationOption;

    constructor(
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly tuiPlatform: TuiPlatform,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly animationOption: AnimationOptions,
    ) {}

    @HostBinding('attr.data-padding')
    get padding(): string {
        if (this.isEmpty) {
            return 'none';
        }

        return tuiIsNumber(this.value?.valueOf()) ? 'm' : 'l';
    }

    get outputValue(): string {
        const value = this.value?.valueOf();

        if (tuiIsNumber(value) && value > 99) {
            return '99+';
        }

        return tuiIsPresent(this.value) ? String(this.value) : '';
    }

    @HostBinding('class._empty-value')
    get isEmpty(): boolean {
        return !this.value && this.value !== 0;
    }

    textOverflow({offsetWidth, scrollWidth}: HTMLElement): boolean {
        return offsetWidth < scrollWidth;
    }

    titleText(element: HTMLElement): string {
        return this.textOverflow(element) ? this.outputValue : '';
    }
}
