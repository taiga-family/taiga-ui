import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiIsNumber, tuiIsString, tuiPx} from '@taiga-ui/cdk';
import {tuiSizeBigger, TuiSizeL, TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const BADGE_SIZE: {[key: string]: TuiSizeL | TuiSizeXS} = {
    xs: 'xs',
    s: 's',
    m: 's',
    l: 'm',
    xl: 'm',
    xxl: 'l',
};

@Component({
    selector: 'tui-badged-content',
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {
    @Input()
    @HostBinding('class._with-top')
    contentTop: PolymorpheusContent;

    @Input()
    @HostBinding('class._with-bottom')
    contentBottom: PolymorpheusContent;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXS | TuiSizeXXL = 'm';

    @Input()
    colorTop = '';

    @Input()
    colorBottom = '';

    @Input()
    @HostBinding('class._rounded')
    rounded = false;

    get topNotification(): string {
        return !this.contentTop && this.colorTop ? this.colorTop : '';
    }

    get bottomNotification(): string {
        return !this.contentBottom && this.colorBottom ? this.colorBottom : '';
    }

    get badgeSize(): TuiSizeL | TuiSizeXS {
        return BADGE_SIZE[this.size];
    }

    get badgeHidden(): boolean {
        return this.size === 'xs';
    }

    get sizeBig(): boolean {
        return tuiSizeBigger(this.size);
    }

    get boxShadow(): string {
        const borderWidth = this.sizeBig ? 3 : 2;

        return `0 0 0 ${tuiPx(borderWidth)}`;
    }

    contentIsNumber(content: PolymorpheusContent): content is number {
        return tuiIsNumber(content?.valueOf());
    }

    contentIsString(content: PolymorpheusContent): content is string {
        return tuiIsString(content?.valueOf());
    }

    getStatus(color: string): TuiStatus {
        return color ? 'custom' : 'primary';
    }
}
