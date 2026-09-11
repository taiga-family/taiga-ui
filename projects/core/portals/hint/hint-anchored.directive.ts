import {type AfterViewInit, Directive, forwardRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/classes';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {map, takeWhile} from 'rxjs';

import {TuiHintDirective} from './hint.directive';
import {TuiHintHover} from './hint-hover.directive';
import {TuiHintPosition} from './hint-position.directive';

const GAP = 8;
const ARROW_OFFSET = 22;

@Directive({
    providers: [
        TuiPositionService,
        TuiHoveredService,
        tuiPositionAccessorFor('hint', TuiHintPosition),
        tuiRectAccessorFor(
            'hint',
            forwardRef(() => TuiHintDirective),
        ),
    ],
})
export class TuiHintAnchored implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly hover = inject(TuiHintHover);
    private readonly vvs = inject(TuiVisualViewportService);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly accessor = inject(TuiRectAccessor);
    private readonly directive = inject(TuiHintDirective);
    private readonly styles$ = inject(TuiPositionService).pipe(
        takeWhile(
            () =>
                this.directive.el.isConnected &&
                this.directive.el.getClientRects().length > 0,
        ),
        map((point) => this.vvs.correct(point)),
        takeUntilDestroyed(),
    );

    protected readonly sub = inject(TuiHoveredService)
        .pipe(takeUntilDestroyed())
        .subscribe((hover) => this.hover.toggle(hover));

    public ngAfterViewInit(): void {
        this.styles$.subscribe({
            next: (point) => this.update(...point),
            complete: () => this.directive.toggle(false),
        });
    }

    private update(left: number, top: number): void {
        const {clientHeight, clientWidth} = this.el;
        const rect = this.accessor.getClientRect();

        if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
            return;
        }

        const viewport = this.viewport.getClientRect();
        const max = Math.max(GAP, viewport.width + viewport.left - clientWidth - GAP);
        const safeLeft = tuiClamp(Math.max(GAP, left), viewport.left + GAP, max);
        const startX = Math.round(safeLeft) === Math.round(rect.left);
        const startY = Math.round(top) === Math.round(rect.top);
        const endX = Math.round(safeLeft + clientWidth) === Math.round(rect.right);
        const endY = Math.round(top + clientHeight) === Math.round(rect.bottom);
        const [beakLeft, beakTop] = this.vvs.correct([
            rect.left + rect.width / 2 - safeLeft,
            rect.top + rect.height / 2 - top,
        ]);

        /* eslint-disable no-nested-ternary */
        const x = startX ? ARROW_OFFSET : endX ? clientWidth - ARROW_OFFSET : beakLeft;
        const y = startY ? ARROW_OFFSET : endY ? clientHeight - ARROW_OFFSET : beakTop;

        this.apply(
            tuiPx(Math.round(top)),
            tuiPx(Math.round(safeLeft)),
            Math.round((tuiClamp(y, 0, clientHeight) / clientHeight) * 100),
            Math.round((tuiClamp(x, 0, clientWidth) / clientWidth) * 100),
        );
    }

    private apply(top: string, left: string, beakTop: number, beakLeft: number): void {
        this.el.style.setProperty('top', top);
        this.el.style.setProperty('left', left);
        this.el.style.setProperty('--t-top', `${beakTop}%`);
        this.el.style.setProperty('--t-left', `${beakLeft}%`);
        this.el.style.setProperty(
            '--t-rotate',
            !beakLeft || Math.ceil(beakLeft) === 100 ? '90deg' : '0deg',
        );
    }
}
