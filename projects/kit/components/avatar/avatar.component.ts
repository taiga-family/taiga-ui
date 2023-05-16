import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {
    tuiDefaultProp,
    tuiIsString,
    tuiPure,
    tuiRequiredSetter,
    TuiSafeHtml,
} from '@taiga-ui/cdk';
import {tuiSizeBigger, TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {tuiStringHashToHsl} from '@taiga-ui/kit/utils/format';

import {TUI_AVATAR_OPTIONS, TuiAvatarOptions} from './avatar-options';

@Component({
    selector: 'tui-avatar',
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarComponent {
    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size = this.options.size;

    @Input('avatarUrl')
    @tuiRequiredSetter()
    set avatarUrlSetter(avatarUrl: SafeResourceUrl | string | null) {
        this.avatarUrl = avatarUrl;
        this.isUrlValid = !!avatarUrl && !this.iconAvatar;
    }

    @Input()
    @tuiDefaultProp()
    text = '';

    @Input()
    @tuiDefaultProp()
    fallback: TuiSafeHtml | null = null;

    @Input()
    @tuiDefaultProp()
    autoColor: boolean = this.options.autoColor;

    @Input()
    @HostBinding('class._rounded')
    @tuiDefaultProp()
    rounded: boolean = this.options.rounded;

    avatarUrl: SafeResourceUrl | string | null = null;

    isUrlValid = false;

    constructor(@Inject(TUI_AVATAR_OPTIONS) private readonly options: TuiAvatarOptions) {}

    @HostBinding('style.background')
    get bgColor(): string {
        return this.autoColor ? tuiStringHashToHsl(this.text) : '';
    }

    @HostBinding('class._has-avatar')
    get hasAvatar(): boolean {
        return this.avatarUrl !== null && this.isUrlValid;
    }

    get iconAvatar(): boolean {
        return tuiIsString(this.avatarUrl) && !!this.avatarUrl?.startsWith('tuiIcon');
    }

    get useFallback(): boolean {
        return (
            !!this.fallback && !!this.avatarUrl && !this.isUrlValid && !this.text.length
        );
    }

    get computedText(): string {
        return this.hasAvatar || this.iconAvatar || this.text === ''
            ? ''
            : this.getSlicedText(this.text, this.size);
    }

    get stringAvatar(): string {
        return this.iconAvatar ? String(this.avatarUrl) : '';
    }

    onError(): void {
        this.isUrlValid = false;
    }

    @tuiPure
    private getSlicedText(text: string, size: TuiSizeXXL | TuiSizeXXS): string {
        const words = text.split(' ');

        return words.length > 1 && tuiSizeBigger(size)
            ? words[0].slice(0, 1) + words[1].slice(0, 1)
            : words[0].slice(0, 1);
    }
}
