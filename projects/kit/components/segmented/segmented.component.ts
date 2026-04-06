import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    model,
    type OnChanges,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement, tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
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
    },
})
export class TuiSegmented implements OnChanges {
    private readonly el = tuiInjectElement();

    protected readonly sub = inject(WaResizeObserverService, {self: true})
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    public readonly size = input(inject(TUI_SEGMENTED_OPTIONS).size);
    public readonly activeItemIndex = model(0);
    public readonly disabled = input(false);

    public ngOnChanges(): void {
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
        const el = this.el.children.item(this.activeItemIndex());

        if (!tuiIsHTMLElement(el)) {
            return;
        }

        Array.from(this.el.children).forEach((e) =>
            e.classList.remove('tui-segmented_active'),
        );

        el.classList.add('tui-segmented_active');

        const {offsetWidth, offsetLeft, offsetTop} = el;

        this.el.style.setProperty('--t-top', tuiPx(offsetTop));
        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
}
