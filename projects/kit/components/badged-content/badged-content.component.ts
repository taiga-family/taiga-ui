import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp, tuiIsNumber, tuiIsString, tuiPx} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {tuiSizeBigger} from '@taiga-ui/core';
import type {TuiStatus} from '@taiga-ui/kit/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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

    get badgeHidden(): boolean {
        return this.size === `xs`;
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
        return color ? `custom` : `primary`;
    }
}
