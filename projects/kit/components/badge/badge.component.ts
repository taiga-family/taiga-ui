import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, tuiIsNumber, tuiIsPresent} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/types';
import {PolymorpheusPrimitive} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    value: PolymorpheusPrimitive;

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeL | TuiSizeXS = 'm';

    @Input()
    @HostBinding('attr.data-status')
    @tuiDefaultProp()
    status: TuiStatus = 'default';

    @Input()
    @HostBinding('class._hoverable')
    @tuiDefaultProp()
    hoverable = false;

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}

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

    titleText({offsetWidth, scrollWidth}: HTMLElement): string {
        return offsetWidth < scrollWidth ? this.outputValue : '';
    }
}
