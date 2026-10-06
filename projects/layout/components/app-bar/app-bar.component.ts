import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    inject,
    input,
    viewChild,
    viewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WaMutationObserverService} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {type TuiSizeL} from '@taiga-ui/core/types';
import {TUI_LIQUID_GLASS} from '@taiga-ui/core/utils/miscellaneous';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {TuiProgressiveBlur} from '@taiga-ui/layout/components/progressive-blur';
import {map, merge} from 'rxjs';

import {TUI_APP_BAR_PROVIDERS} from './app-bar.providers';
import {TuiAppBarButton} from './liquid-glass/app-bar-button.directive';

@Component({
    selector: 'tui-app-bar',
    imports: [TuiAppBarButton, TuiFade, TuiProgressiveBlur],
    templateUrl: './app-bar.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './app-bar.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_APP_BAR_PROVIDERS,
    host: {'data-tui-version': TUI_VERSION, '[attr.data-size]': 'size()'},
})
export class TuiAppBarComponent implements AfterViewInit {
    private readonly side = viewChildren<ElementRef<HTMLElement>>('side');
    private readonly title = viewChild<ElementRef<HTMLElement>>('title');
    private readonly el = tuiInjectElement();

    protected readonly liquidGlass =
        inject(TUI_LIQUID_GLASS) && inject(TUI_PLATFORM) === 'ios';

    protected readonly width = toSignal(
        merge(
            inject(WaResizeObserverService, {self: true}),
            inject(WaMutationObserverService, {self: true}),
        ).pipe(
            tuiZonefull(),
            map(
                () =>
                    2 *
                    Math.max(
                        this.side()[0]?.nativeElement.clientWidth ?? 0,
                        this.side()[this.side().length - 1]?.nativeElement.clientWidth ??
                            0,
                    ),
            ),
        ),
        {initialValue: 0, equal: () => false},
    );

    protected readonly overflown = computed(
        () =>
            (this.title()?.nativeElement.scrollWidth ?? 0) >
            this.el.clientWidth - this.width(),
    );

    public readonly size = input<TuiSizeL>('m');

    // TODO: Remove after :has support
    public ngAfterViewInit(): void {
        this.el.closest('tui-dialog')?.classList.add('tui-app-bar');
    }
}
