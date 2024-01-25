import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {tuiIsString, TuiStringHandler} from '@taiga-ui/cdk';
import {
    TUI_ICON_RESOLVER,
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core';
// eslint-disable-next-line @taiga-ui/experience/no-deep-imports
import {TuiIconModule} from '@taiga-ui/experimental/components/icon';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives';

import {TUI_AVATAR_OPTIONS, TuiAvatarOptions} from './avatar.options';

@Component({
    standalone: true,
    selector: 'tui-avatar',
    imports: [CommonModule, TuiLazyLoadingModule, TuiIconModule],
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
    ],
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-type]': 'type',
        '[style.--t-mask]': '"url(" + resolver(src) + ")"',
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

    constructor(
        @Inject(TUI_AVATAR_OPTIONS) private readonly options: TuiAvatarOptions,
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
    ) {}

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
}
