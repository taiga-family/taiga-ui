import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPure, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiFadeIn, tuiScaleIn} from '@taiga-ui/core/animations';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/classes';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiIsObscured, tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {takeWhile} from 'rxjs';

import {TuiHintDirective} from './hint.directive';
import {TuiHintHover} from './hint-hover.directive';
import {TuiHintPointer} from './hint-pointer.directive';
import {TuiHintPosition} from './hint-position.directive';
import {TuiHintUnstyledComponent} from './hint-unstyled.component';

export const TUI_HINT_PROVIDERS = [
    TuiPositionService,
    TuiHoveredService,
    tuiPositionAccessorFor('hint', TuiHintPosition),
    tuiRectAccessorFor('hint', TuiHintDirective),
];

const BEAK_EDGE_OFFSET = 20;

@Component({
    standalone: true,
    selector: 'tui-hint',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `,
    styleUrls: ['./hint.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    animations: [tuiFadeIn, tuiScaleIn],
    host: {
        '[@tuiScaleIn]': 'isMobile ? options : desktop',
        '[@tuiFadeIn]': 'options',
        '[class._untouchable]': 'pointer',
        '[class._mobile]': 'isMobile',
        '[attr.data-appearance]': 'appearance',
        '[attr.tuiTheme]': 'appearance === "dark" ? "light" : null',
        '(document:click)': 'onClick($event.target)',
    },
})
export class TuiHintComponent<C = any> {
    private readonly el = tuiInjectElement();
    private readonly hover = inject(TuiHintHover);
    private readonly vvs = inject(TuiVisualViewportService);

    protected readonly desktop = {value: '', params: {end: 1, start: 1}};
    protected readonly options = tuiToAnimationOptions(
        inject(TUI_ANIMATIONS_SPEED),
        'cubic-bezier(0.35, 1.3, 0.25, 1)',
    );

    protected readonly pointer = inject(TuiHintPointer, {optional: true});
    protected readonly accessor = inject(TuiRectAccessor);
    protected readonly hint = injectContext<TuiContext<TuiHintDirective<C>>>().$implicit;
    protected readonly isMobile = inject(TUI_IS_MOBILE);

    protected readonly content =
        this.hint.component.component === TuiHintUnstyledComponent
            ? signal('')
            : this.hint.content;

    protected readonly appearance =
        this.hint.appearance ||
        this.hint.el.closest('[tuiTheme]')?.getAttribute('tuiTheme');

    constructor() {
        inject(TuiPositionService)
            .pipe(
                takeWhile(() => this.hint.el.isConnected),
                takeUntilDestroyed(),
            )
            .subscribe({
                next: ([top, left]) => this.update(top, left),
                complete: () => this.hover.toggle(false),
            });

        inject(TuiHoveredService)
            .pipe(takeUntilDestroyed())
            .subscribe((hover) => this.hover.toggle(hover));
    }

    protected onClick(target: HTMLElement): void {
        if (
            (!target.closest('tui-hint') && !this.hint.el.contains(target)) ||
            tuiIsObscured(this.hint.el)
        ) {
            this.hover.toggle(false);
        }
    }

    @tuiPure
    private applyElementStyles(top: number, left: number, isFixed: boolean): void {
        this.el.style.top = tuiPx(top);
        this.el.style.left = tuiPx(left);
        this.el.style.position = isFixed ? 'fixed' : 'absolute';
    }

    @tuiPure
    private toggleBeak(visible: boolean): void {
        this.el.style.setProperty('--t-beak-display', visible ? 'block' : 'none');
    }

    @tuiPure
    private applyBeakStyles(top: number, left: number, rotate: boolean): void {
        this.el.style.setProperty('--t-top', `${top}px`);
        this.el.style.setProperty('--t-left', `${left}px`);
        this.el.style.setProperty('--t-rotate', `${rotate ? 90 : 0}deg`);
    }

    private isBeakRelevant(hintRect: DOMRect, accessorRect: DOMRect): boolean {
        return (
            (hintRect.right - BEAK_EDGE_OFFSET > accessorRect.left &&
                hintRect.left + BEAK_EDGE_OFFSET < accessorRect.right) ||
            (hintRect.bottom - BEAK_EDGE_OFFSET > accessorRect.top &&
                hintRect.top + BEAK_EDGE_OFFSET < accessorRect.bottom)
        );
    }

    private positionBeak(accessorRect: DOMRect, hintRect: DOMRect): void {
        const beakRotate =
            accessorRect.left >= hintRect.right || hintRect.left >= accessorRect.right;
        const hintCenterX = hintRect.width / 2;
        const hintCenterY = hintRect.height / 2;
        const [beakTop, beakLeft] = this.vvs.correct([
            tuiClamp(
                accessorRect.top + accessorRect.height / 2 - hintRect.top,
                beakRotate ? Math.min(BEAK_EDGE_OFFSET, hintCenterY) : 0,
                beakRotate
                    ? Math.max(hintRect.height - BEAK_EDGE_OFFSET, hintCenterY)
                    : hintRect.height,
            ),
            tuiClamp(
                accessorRect.left + accessorRect.width / 2 - hintRect.left,
                beakRotate ? 0 : Math.min(BEAK_EDGE_OFFSET, hintCenterX),
                beakRotate
                    ? hintRect.width
                    : Math.max(hintRect.width - BEAK_EDGE_OFFSET, hintCenterX),
            ),
        ]);

        this.applyBeakStyles(beakTop, beakLeft, beakRotate);
    }

    private update(top: number, left: number): void {
        const hintRect = this.el.getBoundingClientRect();
        const accessorRect = this.accessor.getClientRect();

        if (accessorRect === EMPTY_CLIENT_RECT || !hintRect.height || !hintRect.width) {
            return;
        }

        this.applyElementStyles(
            Math.round(top),
            Math.round(left),
            this.hint.isFixedPosition,
        );

        const beakRelevant = this.isBeakRelevant(hintRect, accessorRect);

        this.toggleBeak(beakRelevant);

        if (beakRelevant) {
            this.positionBeak(accessorRect, hintRect);
        }
    }
}
