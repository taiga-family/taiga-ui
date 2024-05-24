import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    Input,
    Renderer2,
} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {tuiIsString, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_COLORED} from '@taiga-ui/experimental/constants';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

import {TUI_AVATAR_OPTIONS, TuiAvatarOptions} from './avatar.options';

@Component({
    selector: 'tui-avatar',
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-size]': 'size',
        '[attr.data-type]': 'type',
        '[style.--t-mask]': '"url(" + resolver(safeSrc) + ")"',
        '[class._round]': 'round',
    },
})
export class TuiAvatarComponent {
    @Input()
    size = this.options.size;

    @Input()
    round = this.options.round;

    @Input()
    src: SafeResourceUrl | string | null = null;

    @Input()
    appearance = this.options.appearance;

    constructor(
        @Inject(TUI_AVATAR_OPTIONS) private readonly options: TuiAvatarOptions,
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
    ) {}

    get safeSrc(): string {
        return this.src?.toString() ?? '';
    }

    get value(): SafeResourceUrl | string {
        return this.src || '';
    }

    get type(): 'content' | 'icon' | 'img' | 'text' {
        if (this.value && !tuiIsString(this.value)) {
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

    // TODO: Consider another way in v4.0
    @HostListener(TUI_ICON_COLORED, ['$event.target'])
    onColoredIcon(target: HTMLElement): void {
        this.renderer.setStyle(target, 'padding', '20%');
    }
}
