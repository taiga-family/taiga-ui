import {ChangeDetectionStrategy, Component, isSignal, type Signal} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiLoader, tuiLoaderOptionsProvider} from '@taiga-ui/core/components/loader';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

export interface TuiNotificationMiddleOptions {
    closable: Signal<boolean> | boolean;
}

@Component({
    standalone: true,
    selector: 'tui-notification-middle',
    imports: [PolymorpheusOutlet, TuiLoader],
    template: `
        <tui-loader class="t-loader" />
        <ng-container *polymorpheusOutlet="context.content as text">
            {{ text }}
        </ng-container>
    `,
    styleUrls: ['./notification-middle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiLoaderOptionsProvider({size: 'l'}),
        tuiAvatarOptionsProvider({size: 'm'}),
    ],
    hostDirectives: [
        TuiAnimated,
        {directive: WaResizeObserver, outputs: ['waResizeObserver']},
    ],
    host: {
        '(document:click.capture)': 'onClick($event.target)',
        '(document:keydown.esc)': 'onClick($event.currentTarget)',
        '(waResizeObserver)': 'el.style.setProperty("--t-width", el.clientWidth + "px")',
    },
})
export class TuiNotificationMiddleComponent {
    protected readonly el = tuiInjectElement();
    protected readonly context =
        injectContext<TuiPopover<TuiNotificationMiddleOptions, void>>();

    protected onClick(target: HTMLElement): void {
        if (this.closable && !this.el.contains(target)) {
            this.context.$implicit.complete();
        }
    }

    private get closable(): boolean {
        return isSignal(this.context.closable)
            ? this.context.closable()
            : this.context.closable;
    }
}
