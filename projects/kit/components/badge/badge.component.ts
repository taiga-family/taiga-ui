import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {isNumber, tuiDefaultProp} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiStatusT} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: `tui-badge`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./badge.template.html`,
    styleUrls: [`./badge.style.less`],
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': `mode$`,
    },
})
export class TuiBadgeComponent {
    @Input()
    @tuiDefaultProp()
    value: PolymorpheusContent = ``;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeL = `m`;

    @Input()
    @HostBinding(`attr.data-tui-host-status`)
    @tuiDefaultProp()
    status: TuiStatus = `default`;

    @Input()
    @HostBinding(`class._hoverable`)
    @tuiDefaultProp()
    hoverable = false;

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}

    @HostBinding(`attr.data-tui-host-padding`)
    get padding(): string {
        if (this.isEmpty) {
            return `none`;
        }

        return tuiIsNumber(this.value?.valueOf()) ? `m` : `l`;
    }

    get outputValue(): string {
        const value = this.value?.valueOf();

        if (tuiIsNumber(value) && value > 99) {
            return `99+`;
        } else {
            return String(this.value);
        }
    }

    @HostBinding(`class._empty-value`)
    get isEmpty(): boolean {
        return this.value === ``;
    }
}
