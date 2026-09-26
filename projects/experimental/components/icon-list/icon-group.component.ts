import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';

/**
 * An optional section of {@link TuiIconList}. Its heading sticks to the top of
 * the scroll area while the group is on screen and leaves with it.
 *
 * Grouping is entirely opt-in: options can sit directly in the list.
 */
@Component({
    standalone: true,
    selector: 'tui-icon-group',
    imports: [NgIf],
    template: `
        <h3
            *ngIf="label"
            class="t-label"
        >
            {{ label }}
        </h3>
        <ng-content />
    `,
    styleUrls: ['./icon-group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'tuiIconGroup',
    host: {
        role: 'group',
        '[attr.aria-label]': 'label',
    },
})
export class TuiIconGroup {
    private readonly el = tuiInjectElement();
    private readonly scroll = inject(TUI_SCROLL_REF);

    @Input()
    public label = '';

    /**
     * Whether this group is the one currently under the top edge. Written by
     * {@link TuiIconList}, read by whatever drives the tabs.
     */
    public readonly active = signal(false);

    /**
     * Distance from the top of the scroll area, negative once scrolled past.
     * Measured below whatever is stuck on top, see `--tui-icon-list-sticky-offset`.
     */
    public get offset(): number {
        return (
            this.el.getBoundingClientRect().top -
            this.scroll.nativeElement.getBoundingClientRect().top -
            this.margin
        );
    }

    public scrollIntoView(): void {
        const root = this.scroll.nativeElement;

        root.scrollTo({top: root.scrollTop + this.offset, behavior: 'smooth'});
    }

    /**
     * The sticky offset, read back from `scroll-margin` so that any CSS length
     * arrives already resolved to pixels.
     */
    private get margin(): number {
        return parseFloat(getComputedStyle(this.el).scrollMarginTop) || 0;
    }
}
