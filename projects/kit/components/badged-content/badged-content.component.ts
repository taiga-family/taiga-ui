import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TuiNotification,
    TuiSizeL,
    TuiSizeS,
    TuiSizeXS,
    TuiSizeXXL,
    TuiSupportColor,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const BADGE_SIZE: {[key: string]: TuiSizeS | TuiSizeL} = {
    xs: 's',
    s: 's',
    m: 's',
    l: 'm',
    xl: 'm',
    xxl: 'l',
};

@Component({
    selector: 'tui-badged-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
})
export class TuiBadgedContentComponent {
    /** @deprecated use CSS color instead, set borderColor to null */
    @Input()
    @tuiDefaultProp()
    borderColor: string | null = '#fff';

    @Input()
    @HostBinding('attr.data-tui-host-top')
    @tuiDefaultProp()
    contentTop: PolymorpheusContent | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-bottom')
    @tuiDefaultProp()
    contentBottom: PolymorpheusContent | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXXL = 'm';

    @Input()
    @tuiDefaultProp()
    statusTop: TuiNotification | TuiStatus | TuiSupportColor | null = null;

    @Input()
    @tuiDefaultProp()
    statusBottom: TuiNotification | TuiStatus | TuiSupportColor | null = null;

    @Input()
    @HostBinding('class._rounded')
    @tuiDefaultProp()
    rounded = false;

    get topNotification(): string | null {
        return (!this.contentTop && this.statusTop) ||
            (this.contentTop && this.contentIsNumber(this.contentTop) && this.badgeHidden)
            ? this.statusTop
            : null;
    }

    get bottomNotification(): string | null {
        return !this.contentBottom && this.statusBottom ? this.statusBottom : null;
    }

    get badgeSize(): TuiSizeS | TuiSizeL {
        return BADGE_SIZE[this.size];
    }

    get badgeHidden(): boolean {
        return this.size === 'xs';
    }

    get sizeBig(): boolean {
        return sizeBigger(this.size);
    }

    get boxShadow(): string {
        const borderWidth = this.sizeBig ? 3 : 2;

        return `0 0 0 ${borderWidth}px ${this.borderColor}`;
    }

    contentIsNumber(content: PolymorpheusContent): boolean {
        return typeof content.valueOf() === 'number';
    }

    contentIsString(content: PolymorpheusContent): boolean {
        return typeof content.valueOf() === 'string';
    }
}
