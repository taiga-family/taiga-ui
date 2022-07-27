import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk';
import {sizeBigger} from '@taiga-ui/core';
import {stringHashToHsl} from '@taiga-ui/kit/utils/format';

import {TUI_AVATAR_OPTIONS, TuiAvatarOptions} from './avatar-options';

@Component({
    selector: `tui-avatar`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./avatar.template.html`,
    styleUrls: [`./avatar.style.less`],
})
export class TuiAvatarComponent {
    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size = this.options.size;

    @Input(`avatarUrl`)
    @tuiRequiredSetter()
    set avatarUrlSetter(avatarUrl: string | null) {
        this.isUrlValid = !!avatarUrl;
        this.avatarUrl = avatarUrl;
    }

    @Input()
    @tuiDefaultProp()
    text = ``;

    @Input()
    @tuiDefaultProp()
    autoColor: boolean = this.options.autoColor;

    @Input()
    @HostBinding(`class._rounded`)
    @tuiDefaultProp()
    rounded: boolean = this.options.rounded;

    avatarUrl: string | null = null;

    isUrlValid = false;

    constructor(@Inject(TUI_AVATAR_OPTIONS) private readonly options: TuiAvatarOptions) {}

    @HostBinding(`style.background`)
    get bgColor(): string {
        return this.autoColor ? stringHashToHsl(this.text) : ``;
    }

    @HostBinding(`class._has-avatar`)
    get hasAvatar(): boolean {
        return this.avatarUrl !== null && this.isUrlValid;
    }

    get computedText(): string {
        if (this.hasAvatar || this.text === ``) {
            return ``;
        }

        const words = this.text.split(` `);

        return words.length > 1 && sizeBigger(this.size)
            ? words[0].slice(0, 1) + words[1].slice(0, 1)
            : words[0].slice(0, 1);
    }

    onError(): void {
        this.isUrlValid = false;
    }
}
