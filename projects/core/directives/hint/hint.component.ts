import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {
    EMPTY_CLIENT_RECT,
    tuiClamp,
    TuiDestroyService,
    TuiHoveredService,
    tuiPure,
    tuiPx,
} from '@taiga-ui/cdk';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/abstract';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import type {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {tuiIsObscured, tuiToAnimationOptions} from '@taiga-ui/core/utils';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {map, takeUntil} from 'rxjs';

import {TuiHintDirective} from './hint.directive';
import {TuiHintHoverDirective} from './hint-hover.directive';
import {TuiHintPointerDirective} from './hint-pointer.directive';
import {TuiHintPositionDirective} from './hint-position.directive';

const GAP = 4;

export const TUI_HINT_PROVIDERS = [
    TuiDestroyService,
    TuiPositionService,
    TuiHoveredService,
    tuiPositionAccessorFor('hint', TuiHintPositionDirective),
    tuiRectAccessorFor('hint', TuiHintDirective),
];

@Component({
    selector: 'tui-hint',
    template: `
        <ng-content></ng-content>
        <span
            *polymorpheusOutlet="content as text; context: context"
            [innerHTML]="text"
        ></span>
    `,
    styleUrls: ['./hint.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    animations: [tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'options',
        '[class._untouchable]': 'pointer',
    },
})
export class TuiHintComponent<C = any> {
    private readonly polymorpheus =
        inject<TuiContext<TuiPortalItem<C>>>(POLYMORPHEUS_CONTEXT);

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly hover = inject(TuiHintHoverDirective);
    private readonly mode = inject(TuiModeDirective, {optional: true});
    private readonly visualViewportService = inject(TuiVisualViewportService);
    private readonly viewport = inject(TUI_VIEWPORT);

    @HostBinding('attr.data-appearance')
    protected readonly appearance =
        this.polymorpheus.$implicit.appearance || this.mode?.mode;

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly pointer = inject(TuiHintPointerDirective, {optional: true});
    protected readonly accessor = inject(TuiRectAccessor);

    constructor() {
        inject(TuiPositionService)
            .pipe(
                map(point => this.visualViewportService.correct(point)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(([top, left]) => {
                this.update(top, left);
            });

        inject(TuiHoveredService)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(hover => this.hover.toggle(hover));
    }

    protected get content(): PolymorpheusContent<C> {
        return this.polymorpheus.$implicit.content;
    }

    protected get context(): C | undefined {
        return this.polymorpheus.$implicit.context;
    }

    @HostListener('document:click', ['$event.target'])
    protected onClick(target: HTMLElement): void {
        if (
            (!this.el.contains(target) && !this.hover.el.contains(target)) ||
            tuiIsObscured(this.hover.el)
        ) {
            this.hover.toggle(false);
        }
    }

    @tuiPure
    private update(top: number, left: number): void {
        const {height, width} = this.el.getBoundingClientRect();
        const rect = this.accessor.getClientRect();
        const viewport = this.viewport.getClientRect();

        if (rect === EMPTY_CLIENT_RECT) {
            return;
        }

        const safeLeft = tuiClamp(left, GAP, viewport.width - width - GAP);
        const [beakTop, beakLeft] = this.visualViewportService.correct([
            rect.top + rect.height / 2 - top,
            rect.left + rect.width / 2 - safeLeft,
        ]);

        this.el.style.top = tuiPx(top);
        this.el.style.left = tuiPx(safeLeft);
        this.el.style.setProperty('--top', tuiPx(tuiClamp(beakTop, 0.5, height - 1)));
        this.el.style.setProperty('--left', tuiPx(tuiClamp(beakLeft, 0.5, width - 1)));
    }
}
