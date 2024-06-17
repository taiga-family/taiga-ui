import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {tuiIsString} from '@taiga-ui/cdk';
import {
    TUI_ICON_RESOLVER,
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core';

import {TUI_AVATAR_OPTIONS} from './avatar.options';

@Component({
    standalone: true,
    selector: 'tui-avatar,button[tuiAvatar],a[tuiAvatar]',
    imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
    hostDirectives: [
        {
            directive: TuiAppearance,
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
        '[style.--t-mask]': '"url(" + resolver(safeSrc) + ")"',
        '[class._round]': 'round',
    },
})
export class TuiAvatarComponent {
    private readonly options = inject(TUI_AVATAR_OPTIONS);

    protected readonly resolver = inject(TUI_ICON_RESOLVER);

    @Input()
    public size = this.options.size;

    @Input()
    public round = this.options.round;

    @Input()
    public src?: SafeResourceUrl | string | null;

    protected get safeSrc(): string {
        return this.src?.toString() ?? '';
    }

    protected get value(): SafeResourceUrl | string {
        return this.src || '';
    }

    protected get type(): 'content' | 'icon' | 'img' | 'text' {
        if (this.value && !tuiIsString(this.value)) {
            return 'img';
        }

        if (this.value.startsWith('@tui.') || this.value.endsWith('.svg')) {
            return 'icon';
        }

        if (this.value.length > 0 && this.value.length < 3) {
            return 'text';
        }

        return this.value.length ? 'img' : 'content';
    }
}
