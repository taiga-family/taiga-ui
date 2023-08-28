import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-avatar',
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarComponent {
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    @HostBinding('class._round')
    round = false;

    @Input()
    src: SafeResourceUrl | string | null = null;

    @HostBinding('class._img')
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
