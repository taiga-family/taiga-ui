import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {isNumber, tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/enums';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '{{outputValue}}',
    styleUrls: ['./badge.style.less'],
    providers: [TuiDestroyService, MODE_PROVIDER],
})
export class TuiBadgeComponent {
    @Input()
    @tuiDefaultProp()
    value: number | string = '';

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @HostBinding('attr.data-tui-host-status')
    @tuiDefaultProp()
    status: TuiStatus = TuiStatus.Default;

    @Input()
    @HostBinding('class._hoverable')
    @tuiDefaultProp()
    hoverable = false;

    @HostBinding('attr.data-tui-host-mode')
    mode: TuiBrightness | null = null;

    constructor(@Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>) {
        mode$.subscribe(mode => {
            this.mode = mode;
        });
    }

    @HostBinding('attr.data-tui-host-padding')
    get padding(): string {
        return isNumber(this.value.valueOf()) ? 'm' : 'l';
    }

    get outputValue(): string {
        if (isNumber(this.value.valueOf()) && this.value.valueOf() > 99) {
            return '99+';
        } else {
            return String(this.value);
        }
    }
}
