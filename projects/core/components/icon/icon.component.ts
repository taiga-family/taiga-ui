import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {
    TUI_ICON_END,
    TUI_ICON_START,
    tuiGetIconMode,
    tuiInjectIconResolver,
} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-icon',
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/icon.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-icon]': 'iconResource() || "url()"',
        '[style.--t-icon-bg]': 'backgroundSrc()',
        '[attr.data-icon]': 'iconMode()',
    },
})
export class TuiIcon {
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();
    protected readonly backgroundSrc = signal<string | null>(null);
    protected readonly iconSrc = signal(
        inject(TUI_ICON_START, {self: true, optional: true}) ||
            inject(TUI_ICON_END, {self: true, optional: true}),
    );

    protected readonly iconResource = computed(() => this.resolve(this.iconSrc()));

    protected readonly iconMode = computed(() => tuiGetIconMode(this.iconSrc()));

    @Input()
    public set icon(icon: string) {
        this.iconSrc.set(icon);
    }

    @Input()
    public set background(background: string) {
        this.backgroundSrc.set(this.resolve(background));
    }

    public resolve(value?: string | null): string | null {
        if (!value) {
            return null;
        }

        return tuiGetIconMode(value) === 'font'
            ? `'${this.resolver(value)}'`
            : `url(${this.resolver(value)})`;
    }
}
