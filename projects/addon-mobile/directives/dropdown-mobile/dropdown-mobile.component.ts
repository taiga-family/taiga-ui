import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    type OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGetFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

const GAP = 16;

@Component({
    selector: 'tui-dropdown-mobile',
    imports: [PolymorpheusOutlet],
    template: `
        <div class="t-container">
            <ng-container *polymorpheusOutlet="dropdown.content() as text; context: ctx">
                {{ text }}
            </ng-container>
        </div>
    `,
    styleUrl: './dropdown-mobile.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated, TuiActiveZone],
    host: {
        '(pointerdown.prevent)': '0',
        '(document:click.zoneless.capture)': 'onClick($event)',
        '(window>scroll.zoneless.capture)': 'refresh()',
        '(visualViewport>resize.zoneless)': 'refresh()',
        '(visualViewport>scroll.zoneless)': 'refresh()',
    },
})
export class TuiDropdownMobileComponent implements OnDestroy {
    private readonly el = tuiInjectElement();
    private readonly keyboard = inject(TuiKeyboardService);
    private readonly doc = inject(DOCUMENT);
    private readonly scrollTop = this.doc.documentElement.scrollTop;
    private readonly observer = new ResizeObserver(() => this.refresh());

    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly ctx = {$implicit: (): void => this.dropdown.toggle(false)};

    constructor() {
        this.observer.observe(this.dropdown.el);
        this.doc.documentElement.style.setProperty('scroll-behavior', 'initial');
    }

    public ngOnDestroy(): void {
        this.observer.disconnect();
        this.doc.body.classList.remove('t-dropdown-mobile');
        this.doc.body.style.removeProperty('--t-root-top');
        this.doc.documentElement.scrollTop = this.scrollTop;
        this.doc.documentElement.style.removeProperty('scroll-behavior');

        if (this.focused) {
            this.keyboard.hide();
        }
    }

    protected onClick(event: MouseEvent): void {
        if (
            tuiIsElement(event.target) &&
            !this.el.contains(event.target) &&
            (!this.dropdown.el.contains(event.target) ||
                event.target.matches('input,textarea'))
        ) {
            event.stopPropagation();
        }
    }

    protected refresh(): void {
        const {offsetTop = 0, height = 0} = this.doc.defaultView?.visualViewport || {};

        this.doc.body.style.removeProperty('--t-root-top');

        if (
            !this.focused ||
            !this.doc.documentElement.style.getPropertyValue('scroll-behavior')
        ) {
            return;
        }

        this.doc.documentElement.scrollTop = 0;

        const rect = this.dropdown.el.getBoundingClientRect();
        const topMargin = `max(var(--tui-dropdown-mobile-offset, ${tuiPx(GAP)}), env(safe-area-inset-top))`;
        const offset = `(${topMargin} + ${tuiPx(rect.height + GAP)})`;
        const top = `calc(${tuiPx(offsetTop - rect.top)} + ${topMargin})`;

        this.el.style.setProperty('top', `calc(${tuiPx(offsetTop)} + ${offset})`);
        this.el.style.setProperty('height', `calc(${tuiPx(height)} - ${offset})`);
        this.doc.body.classList.add('t-dropdown-mobile');
        this.doc.body.style.setProperty('--t-root-top', top);
    }

    private get focused(): boolean {
        return this.dropdown.el.contains(tuiGetFocused(this.doc));
    }
}
