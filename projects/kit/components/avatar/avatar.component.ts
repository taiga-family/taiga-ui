import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk';
import {sizeBigger, TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {stringHashToHsl} from '@taiga-ui/kit/utils/format';

@Component({
    selector: 'tui-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
})
export class TuiAvatarComponent {
    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXXL = 'm';

    @Input('avatarUrl')
    @tuiRequiredSetter()
    set avatarUrlSetter(avatarUrl: string | null) {
        this.isUrlValid = !!avatarUrl;
        this.avatarUrl = avatarUrl;
    }

    @Input()
    @tuiDefaultProp()
    text = '';

    @Input()
    @tuiDefaultProp()
    autoColor = false;

    @Input()
    @HostBinding('class._rounded')
    @tuiDefaultProp()
    rounded = false;

    avatarUrl: string | null = null;

    isUrlValid = false;

    @HostBinding('style.background')
    get bgColor(): string {
        return this.autoColor ? stringHashToHsl(this.text) : '';
    }

    @HostBinding('class._has-avatar')
    get hasAvatar(): boolean {
        return this.avatarUrl !== null && this.isUrlValid;
    }

    get computedText(): string {
        if (this.hasAvatar || this.text === '') {
            return '';
        }

        const words = this.text.split(' ');

        return words.length > 1 && sizeBigger(this.size)
            ? words[0].substr(0, 1) + words[1].substr(0, 1)
            : words[0].substr(0, 1);
    }

    onError() {
        this.isUrlValid = false;
    }
}
