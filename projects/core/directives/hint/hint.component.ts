import {ChangeDetectionStrategy, Component, HostListener, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPure, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/classes';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {tuiIsObscured, tuiToAnimationOptions} from '@taiga-ui/core/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {POLYMORPHEUS_CONTEXT, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {map, takeWhile} from 'rxjs';

import {TuiHintDirective} from './hint.directive';
import {TuiHintHover} from './hint-hover.directive';
import {TuiHintPointer} from './hint-pointer.directive';
import {TuiHintPosition} from './hint-position.directive';
import {TuiHintUnstyledComponent} from './hint-unstyled.component';

const GAP = 4;

export const TUI_HINT_PROVIDERS = [
    TuiPositionService,
    TuiHoveredService,
    tuiPositionAccessorFor('hint', TuiHintPosition),
    tuiRectAccessorFor('hint', TuiHintDirective),
];

@Component({
    standalone: true,
    selector: 'tui-hint',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content as text; context: hint.context"
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
        '[attr.data-appearance]': 'appearance',
        '[attr.tuiTheme]': 'appearance',
    },
})
export class TuiHintComponent<C = any> {
    private readonly el = tuiInjectElement();
    private readonly hover = inject(TuiHintHover);
    private readonly vvs = inject(TuiVisualViewportService);
    private readonly viewport = inject(TUI_VIEWPORT);

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly pointer = inject(TuiHintPointer, {optional: true});
    protected readonly accessor = inject(TuiRectAccessor);

    protected readonly hint =
        inject<TuiContext<TuiHintDirective<C>>>(POLYMORPHEUS_CONTEXT).$implicit;

    protected readonly appearance =
        this.hint.appearance ||
        this.hint.el.closest('[tuiTheme]')?.getAttribute('tuiTheme');

    constructor() {
        inject(TuiPositionService)
            .pipe(
                takeWhile(() => this.hint.el.isConnected),
                map((point) => this.vvs.correct(point)),
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

    protected get content(): PolymorpheusContent<C> {
        return this.hint.component.component === TuiHintUnstyledComponent
            ? ''
            : this.hint.content;
    }

    @HostListener('document:click', ['$event.target'])
    protected onClick(target: HTMLElement): void {
        if (
            (!target.closest('tui-hint') && !this.hint.el.contains(target)) ||
            tuiIsObscured(this.hint.el)
        ) {
            this.hover.toggle(false);
        }
    }

    @tuiPure
    private apply(top: string, left: string, beakTop: string, beakLeft: string): void {
        this.el.style.top = top;
        this.el.style.left = left;
        this.el.style.setProperty('--top', beakTop);
        this.el.style.setProperty('--left', beakLeft);
    }

    private update(top: number, left: number): void {
        const {height, width} = this.el.getBoundingClientRect();
        const rect = this.accessor.getClientRect();
        const viewport = this.viewport.getClientRect();

        if (rect === EMPTY_CLIENT_RECT || !height || !width) {
            return;
        }

        const safeLeft = tuiClamp(left, GAP, viewport.width - width - GAP);
        const [beakTop, beakLeft] = this.vvs.correct([
            rect.top + rect.height / 2 - top,
            rect.left + rect.width / 2 - safeLeft,
        ]);

        this.apply(
            tuiPx(Math.round(top)),
            tuiPx(Math.round(safeLeft)),
            tuiPx(Math.round(tuiClamp(beakTop, 1, height - 1))),
            tuiPx(Math.round(tuiClamp(beakLeft, 1, width - 1))),
        );
    }
}
