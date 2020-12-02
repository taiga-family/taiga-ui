import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {
    TuiBaseColor,
    TuiColor,
    TuiNotification,
    TuiSizeL,
    TuiSizeS,
    TuiSupportColor,
    TuiTextColor,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/enums';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
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
    @HostBinding('attr.data-tui-background')
    @tuiDefaultProp()
    status: TuiStatus | TuiSupportColor = TuiStatus.Normal;

    @Input()
    @HostBinding('attr.data-tui-host-text-color')
    textColor: TuiTextColor | null = null;

    @Input()
    @tuiDefaultProp()
    notification: TuiNotification | TuiSupportColor | null = null;

    @Input()
    @HostBinding('class._hoverable')
    @tuiDefaultProp()
    hoverable = false;

    @HostBinding('attr.data-tui-host-padding')
    get padding(): string {
        return typeof this.value.valueOf() === 'number' ? 'm' : 'l';
    }

    get outputValue(): number | string {
        if (typeof this.value.valueOf() === 'number' && this.value.valueOf() > 99) {
            return '99+';
        } else {
            return this.value;
        }
    }

    get notificationBackground(): TuiColor | null {
        switch (this.notification) {
            case TuiNotification.Warning:
                return TuiBaseColor.Primary;
            case TuiNotification.Info:
                return null;
            case TuiNotification.Error:
                return TuiBaseColor.Error;
            case TuiNotification.Success:
                return TuiBaseColor.Success;
            default:
                return this.notification;
        }
    }
}
