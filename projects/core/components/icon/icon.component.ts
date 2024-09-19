import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-icon',
    imports: [NgIf],
    template: '<span *ngIf="alt" class="sr-only">{{alt}}</span>',
    styles: [
        `
        @import '@taiga-ui/core/styles/taiga-ui-local.less';
        @import "@taiga-ui/core/styles/components/icon.less";

        .sr-only {
            .sr-only();
        }
    `,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-icon]': 'iconSrc() || "url()"',
        '[style.--t-icon-bg]': 'backgroundSrc()',
        '[attr.aria-hidden]': 'true',
    },
})
export class TuiIcon {
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();
    protected readonly backgroundSrc = signal<string | null>(null);
    protected readonly iconSrc = signal(
        this.resolve(
            inject(TUI_ICON_START, {self: true, optional: true}) ||
                inject(TUI_ICON_END, {self: true, optional: true}),
        ),
    );

    @Input()
    public alt = '';

    @Input()
    public set icon(icon: string) {
        this.iconSrc.set(this.resolve(icon));
    }

    @Input()
    public set background(background: string) {
        this.backgroundSrc.set(this.resolve(background));
    }

    public resolve(value?: string | null): string | null {
        return value ? `url(${this.resolver(value)})` : null;
    }
}
