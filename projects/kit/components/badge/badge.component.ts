import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiInjectionTokenType, tuiIsNumber} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {MODE_PROVIDER, TUI_MODE} from '@taiga-ui/core';
import type {TuiStatus} from '@taiga-ui/kit/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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

    constructor(
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
    ) {}

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
