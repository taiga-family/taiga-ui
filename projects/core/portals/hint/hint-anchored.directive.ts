import {type AfterViewInit, DestroyRef, Directive, effect, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiPositionAccessor,
    tuiProvideAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANCHOR_SUPPORT, TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {map, takeWhile} from 'rxjs';

import {TuiHintDirective} from './hint.directive';
import {TuiHintHover} from './hint-hover.directive';

const GAP = 8;
const ARROW_OFFSET = 22;

@Directive({
    providers: [
        TuiPositionService,
        TuiHoveredService,
        tuiProvideAccessor(TuiPositionAccessor, 'hint'),
        tuiProvideAccessor(TuiRectAccessor, 'hint'),
    ],
    host: {
        '(animationcancel.self)': 'onAnimation($event, false)',
        '(animationend.self)': 'onAnimation($event, false)',
        '(animationstart.self)': 'onAnimation($event, true)',
    },
})
export class TuiHintAnchored implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);
    private readonly hover = inject(TuiHintHover);
    private readonly vvs = inject(TuiVisualViewportService);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly rect = inject(TuiRectAccessor);
    private readonly accessor = inject(TuiPositionAccessor);
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

    protected readonly anchored =
        inject(TUI_ANCHOR_SUPPORT) &&
        typeof this.accessor.position === 'function' &&
        this.viewport.type === 'window';

    protected readonly sub = inject(TuiHoveredService)
        .pipe(takeUntilDestroyed())
        .subscribe((hover) => this.hover.toggle(hover));

    protected readonly sync = effect(() => {
        if (this.anchored) {
            this.accessor.position?.(this.el);
        }
    });

    public ngAfterViewInit(): void {
        if (this.anchored) {
            this.observeHost();
        } else {
            this.styles$.subscribe({
                next: (point) => this.update(...point),
                complete: () => this.directive.toggle(false),
            });
        }
    }

    protected onAnimation({animationName}: AnimationEvent, running: boolean): void {
        if (!this.anchored || animationName !== 'tuiScale') {
            return;
        }

        // A transform makes fixed arrows lose access to the external anchor.
        // Use local coordinates only while the original scale animation runs.
        if (running) {
            this.update(this.el.offsetLeft, this.el.offsetTop);
        }

        this.el.classList.toggle('_animating', running);
    }

    // Projection can detach the host without destroying its directive.
    // CSS positioning has no frame subscription to detect this and close the hint.
    private observeHost(): void {
        const host = this.directive.el;
        const mutations = new MutationObserver((records) => {
            if (
                !host.isConnected &&
                records.some(({removedNodes}) =>
                    Array.from(removedNodes).some((node) => node.contains(host)),
                )
            ) {
                this.directive.toggle(false);
            }
        });

        const resize =
            typeof ResizeObserver === 'undefined'
                ? null
                : new ResizeObserver(() => {
                      if (!host.getClientRects().length) {
                          this.directive.toggle(false);
                      }
                  });

        mutations.observe(host.ownerDocument.body, {childList: true, subtree: true});
        resize?.observe(host);
        this.destroyRef.onDestroy(() => {
            mutations.disconnect();
            resize?.disconnect();
        });
    }

    private update(left: number, top: number): void {
        const {clientHeight, clientWidth} = this.el;
        const rect = this.rect.getClientRect();

        if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
            return;
        }

        const viewport = this.viewport.getClientRect();
        const max = Math.max(GAP, viewport.width + viewport.left - clientWidth - GAP);
        const safeLeft = this.anchored
            ? left
            : tuiClamp(Math.max(GAP, left), viewport.left + GAP, max);

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
        if (!this.anchored) {
            this.el.style.setProperty('top', top);
            this.el.style.setProperty('left', left);
        }

        this.el.style.setProperty('--t-top', `${beakTop}%`);
        this.el.style.setProperty('--t-left', `${beakLeft}%`);
        this.el.style.setProperty(
            '--t-rotate',
            !beakLeft || Math.ceil(beakLeft) === 100 ? '90deg' : '0deg',
        );
    }
}
