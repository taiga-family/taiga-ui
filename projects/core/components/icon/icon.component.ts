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
        '[style.--t-icon]': 'resource() || "url()"',
        '[style.--t-icon-bg]': 'bgResource()',
        '[attr.data-icon]': 'mode()',
    },
})
export class TuiIcon {
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();
    protected readonly src = signal(
        inject(TUI_ICON_START, {self: true, optional: true}) ||
            inject(TUI_ICON_END, {self: true, optional: true}),
    );

    protected readonly bg = signal<string | null>(null);
    protected readonly resource = computed(() => this.resolve(this.src()));
    protected readonly mode = computed(() => tuiGetIconMode(this.src()));
    protected readonly bgResource = computed(() => this.resolve(this.bg()));

    @Input()
    public set icon(icon: string) {
        this.src.set(icon);
    }

    @Input()
    public set background(background: string) {
        this.bg.set(background);
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
