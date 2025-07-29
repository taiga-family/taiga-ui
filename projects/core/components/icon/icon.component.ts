import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {
    TUI_ICON_END,
    TUI_ICON_START,
    tuiInjectIconModeResolver,
    type TuiResolvedIcon,
} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-icon',
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/icon.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-icon]': 'iconPath()',
        '[style.--t-icon-bg]': 'backgroundPath()',
        '[class]': 'iconClass()',
    },
})
export class TuiIcon {
    protected readonly resolver: TuiHandler<string, TuiResolvedIcon> =
        tuiInjectIconModeResolver();
    protected readonly iconSrc = signal<TuiResolvedIcon | null>(
        this.resolve(
            inject(TUI_ICON_START, {self: true, optional: true}) ||
                inject(TUI_ICON_END, {self: true, optional: true}),
        ),
    );
    protected readonly backgroundSrc = signal<TuiResolvedIcon | null>(null);

    @Input()
    public set icon(icon: string) {
        this.iconSrc.set(this.resolve(icon));
    }

    @Input()
    public set background(background: string) {
        this.backgroundSrc.set(this.resolve(background));
    }

    protected readonly iconPath = computed(() => {
        const icon = this.iconSrc();
        return icon ? icon.resource.path : 'url()';
    });

    protected readonly backgroundPath = computed(() => {
        const bg = this.backgroundSrc();
        return bg?.resource.path;
    });

    protected readonly iconClass = computed(() => {
        const icon = this.iconSrc();
        return icon ? icon.className : '';
    });

    public resolve(value?: string | null): TuiResolvedIcon | null {
        return value ? this.resolver(value) : null;
    }
}
