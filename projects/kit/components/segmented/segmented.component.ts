import type {OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement, tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/kit/components/badge-notification';

import {TuiSegmentedDirective} from './segmented.directive';

export const [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
    size: 's' as TuiSizeL | TuiSizeS,
});

@Component({
    standalone: true,
    selector: 'tui-segmented',
    template: '<ng-content />',
    styleUrls: ['./segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResizeObserverService, tuiBadgeNotificationOptionsProvider({size: 's'})],
    hostDirectives: [TuiSegmentedDirective],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiSegmented implements OnChanges {
    private readonly el = tuiInjectElement();

    protected readonly sub = inject(ResizeObserverService, {self: true})
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    @Input()
    public size: TuiSizeL | TuiSizeS = inject(TUI_SEGMENTED_OPTIONS).size;

    @Input()
    public activeItemIndex = 0;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public ngOnChanges(): void {
        this.refresh();
    }

    public update(activeItemIndex: number): void {
        if (activeItemIndex === this.activeItemIndex || activeItemIndex < 0) {
            return;
        }

        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
        this.refresh();
    }

    private get activeElement(): Element | null {
        return this.el.children.item(this.activeItemIndex);
    }

    private refresh(): void {
        const el = this.activeElement;

        if (!tuiIsHTMLElement(el)) {
            return;
        }

        Array.from(this.el.children).forEach((e) =>
            e.classList.remove('tui-segmented_active'),
        );

        el.classList.add('tui-segmented_active');

        const {offsetWidth = 0, offsetLeft = 0, offsetTop = 0} = el;

        this.el.style.setProperty('--t-top', tuiPx(offsetTop));
        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
}
