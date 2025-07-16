import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {tuiDirectiveBinding, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

import {TUI_AVATAR_OPTIONS} from './avatar.options';

@Component({
    standalone: true,
    // TODO: Remove `tui-avatar` selector leaving only [tuiAvatar] in v5
    selector: 'tui-avatar,button[tuiAvatar],a[tuiAvatar]',
    imports: [NgIf],
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiIcons],
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-type]': 'type()',
        '[class._round]': 'round',
        '[class._svg]': 'svg()',
    },
})
export class TuiAvatar {
    private readonly options = inject(TUI_AVATAR_OPTIONS);

    protected readonly src = signal<SafeResourceUrl | string | null | undefined>(null);
    protected readonly value = computed<SafeResourceUrl | string>(() => this.src() ?? '');
    protected readonly svg = computed(
        (value = this.value()) => tuiIsString(value) && value.endsWith('.svg'),
    );

    protected readonly type = computed<'content' | 'icon' | 'img' | 'text'>(
        (value = this.value()) => {
            if (value && !tuiIsString(value)) {
                return 'img';
            }

            if (value.startsWith('@tui.')) {
                return 'icon';
            }

            if (value.length > 0 && value.length < 3) {
                return 'text';
            }

            return value.length ? 'img' : 'content';
        },
    );

    protected readonly icon = tuiDirectiveBinding(
        TuiIcons,
        'iconStart',
        computed(() => (this.type() === 'icon' ? this.src() : null)),
    );

    @Input()
    public size = this.options.size;

    @Input()
    public round = this.options.round;

    // TODO(v5): use signal inputs
    @Input('src')
    public set srcSetter(x: SafeResourceUrl | string | null | undefined) {
        this.src.set(x);
    }
}
