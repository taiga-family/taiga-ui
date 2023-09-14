import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {TUI_PLATFORM, tuiIsString, TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';

@Component({
    selector: 'tui-avatar',
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-platform]': 'platform',
        '[class._round]': 'round',
        '[class._img]': 'type === "img"',
    },
})
export class TuiAvatarComponent {
    @Input()
    size: TuiSizeXXL | TuiSizeXXS = 'm';

    @Input()
    round = false;

    @Input()
    src: SafeResourceUrl | string | null = null;

    constructor(@Inject(TUI_PLATFORM) readonly platform: TuiPlatform) {}

    get img(): boolean {
        return this.type === 'img';
    }

    get value(): SafeResourceUrl | string {
        return this.src || '';
    }

    get type(): 'content' | 'icon' | 'img' | 'text' {
        if (!!this.value && !tuiIsString(this.value)) {
            return 'img';
        }

        if (this.value.startsWith('tuiIcon') || this.value.endsWith('.svg')) {
            return 'icon';
        }

        if (this.value.length > 0 && this.value.length < 3) {
            return 'text';
        }

        return this.value.length ? 'img' : 'content';
    }
}
