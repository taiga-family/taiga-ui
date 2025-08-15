import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {type SafeResourceUrl} from '@angular/platform-browser';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_ICON_END,
    TUI_ICON_START,
    tuiGetIconMode,
    tuiInjectIconResolver,
} from '@taiga-ui/core/tokens';

/**
 * Workaround for {@link TuiAvatar} to properly handle icon color in {@link TuiAppearance}
 */
type Icon = SafeResourceUrl | string | null | undefined;

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/icons.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-icons',
    },
})
class TuiIconsStyles {}

@Directive({
    standalone: true,
    host: {
        tuiIcons: '',
        '[style.--t-icon-start]': 'iconStartResource()',
        '[style.--t-icon-end]': 'iconEndResource()',
        '[attr.data-icon-start]': 'iconStartMode()',
        '[attr.data-icon-end]': 'iconEndMode()',
    },
})
export class TuiIcons {
    private readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    protected readonly nothing = tuiWithStyles(TuiIconsStyles);
    protected readonly iconStartResource = computed(() => this.resolve(this.iconStart()));
    protected readonly iconEndResource = computed(() => this.resolve(this.iconEnd()));
    protected readonly iconStartMode = computed(() =>
        tuiGetIconMode(this.iconStart()?.toString()),
    );

    protected readonly iconEndMode = computed(() => tuiGetIconMode(this.iconEnd()));

    public readonly iconStart = signal<Icon>(
        inject(TUI_ICON_START, {self: true, optional: true}) || '',
    );

    public readonly iconEnd = signal<string>(
        inject(TUI_ICON_END, {self: true, optional: true}) || '',
    );

    // TODO(v5): use signal inputs
    @Input('iconStart')
    public set iconStartSetter(x: Icon) {
        this.iconStart.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('iconEnd')
    public set iconEndSetter(x: string) {
        this.iconEnd.set(x);
    }

    protected resolve(icon: Icon): string | null {
        if (!icon) {
            return null;
        }

        const iconStr = icon.toString();

        return tuiGetIconMode(iconStr) === 'font'
            ? `'${this.resolver(iconStr)}'`
            : `url(${this.resolver(iconStr)})`;
    }
}
