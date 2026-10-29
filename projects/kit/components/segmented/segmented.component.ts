import {
    type AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    model,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_CSS} from '@ng-web-apis/common';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiGetElementOffset, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/kit/components/badge-notification';

import {TuiSegmentedDirective} from './segmented.directive';

export const [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
    size: 's',
});

@Component({
    selector: 'tui-segmented',
    template: '<ng-content />',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './segmented.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        WaResizeObserverService,
        tuiBadgeNotificationOptionsProvider({size: 's'}),
    ],
    hostDirectives: [TuiSegmentedDirective],
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.data-size]': 'size()',
        '[attr.inert]': 'disabled() ? "" : null',
        '[style.--t-anchor]': 'anchorId',
    },
})
export class TuiSegmented implements AfterViewChecked {
    private readonly legacy = !inject(WA_CSS)?.supports('anchor-name', '--t-anchor');
    private readonly el = tuiInjectElement();

    protected readonly anchorId = `--${tuiGenerateId()}`;

    protected readonly sub = inject(WaResizeObserverService, {self: true})
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    public readonly size = input(inject(TUI_SEGMENTED_OPTIONS).size);
    public readonly activeItemIndex = model(0);
    public readonly disabled = input(false);

    public get items(): readonly HTMLElement[] {
        return Array.from(
            this.el.querySelectorAll<HTMLElement>('a, button, label'),
        ).filter((item) => !item.closest('.t-item_more'));
    }

    public ngAfterViewChecked(): void {
        this.refresh();
    }

    public update(activeItemIndex: number): void {
        if (activeItemIndex === this.activeItemIndex() || activeItemIndex < 0) {
            return;
        }

        this.activeItemIndex.set(activeItemIndex);
        this.refresh();
    }

    private refresh(): void {
        const items = this.items;
        const el = items[this.activeItemIndex()];

        items.forEach((item) =>
            item.classList.toggle('tui-segmented_active', item === el),
        );

        if (!el || !this.legacy) {
            return;
        }

        const {offsetWidth} = el;
        const {offsetLeft, offsetTop} = tuiGetElementOffset(this.el, el);

        this.el.style.setProperty('--t-top', tuiPx(offsetTop));
        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
}
