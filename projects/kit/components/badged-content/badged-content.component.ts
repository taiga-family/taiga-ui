import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {isNumber, px, tuiDefaultProp} from '@taiga-ui/cdk';
import {sizeBigger, TuiSizeL, TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiStatusT} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const BADGE_SIZE: {[key: string]: TuiSizeXS | TuiSizeL} = {
    xs: `xs`,
    s: `s`,
    m: `s`,
    l: `m`,
    xl: `m`,
    xxl: `l`,
};

@Component({
    selector: `tui-badged-content`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./badged-content.template.html`,
    styleUrls: [`./badged-content.style.less`],
})
export class TuiBadgedContentComponent {
    @Input()
    @HostBinding(`attr.data-tui-host-top`)
    @tuiDefaultProp()
    contentTop: PolymorpheusContent = ``;

    @Input()
    @HostBinding(`attr.data-tui-host-bottom`)
    @tuiDefaultProp()
    contentBottom: PolymorpheusContent = ``;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXXL = `m`;

    @Input()
    @tuiDefaultProp()
    colorTop = ``;

    @Input()
    @tuiDefaultProp()
    colorBottom = ``;

    @Input()
    @HostBinding(`class._rounded`)
    @tuiDefaultProp()
    rounded = false;

    get topNotification(): string {
        return !this.contentTop && this.colorTop ? this.colorTop : ``;
    }

    get bottomNotification(): string {
        return !this.contentBottom && this.colorBottom ? this.colorBottom : ``;
    }

    get badgeSize(): TuiSizeXS | TuiSizeL {
        return BADGE_SIZE[this.size];
    }

    get sizeBig(): boolean {
        return sizeBigger(this.size);
    }

    get boxShadow(): string {
        const borderWidth = this.sizeBig ? 3 : 2;

        return `0 0 0 ${px(borderWidth)}`;
    }

    contentIsNumber(content: PolymorpheusContent): boolean {
        return isNumber(content.valueOf());
    }

    contentIsString(content: PolymorpheusContent): boolean {
        return typeof content.valueOf() === `string`;
    }

    getStatus(color: string): TuiStatusT {
        return color ? `custom` : `primary`;
    }
}
