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
import {map, takeWhile} from 'rxjs';

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
        '[attr.tuiTheme]': 'appearance',
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

    protected onClick(target: HTMLElement): void {
        if (
            (!target.closest('tui-hint') && !this.hint.el.contains(target)) ||
            tuiIsObscured(this.hint.el)
        ) {
            this.hover.toggle(false);
        }
    }

    @tuiPure
    private apply(top: string, left: string, beakTop: number, beakLeft: number): void {
        this.el.style.top = top;
        this.el.style.left = left;
        this.el.style.setProperty('--top', `${beakTop}%`);
        this.el.style.setProperty('--left', `${beakLeft}%`);
        this.el.style.setProperty(
            '--rotate',
            !beakLeft || Math.ceil(beakLeft) === 100 ? '90deg' : '0deg',
        );
    }

    private update(top: number, left: number): void {
        const {clientHeight, clientWidth} = this.el;
        const rect = this.accessor.getClientRect();

        if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
            return;
        }

        const [beakTop, beakLeft] = this.vvs.correct([
            rect.top + rect.height / 2 - top,
            rect.left + rect.width / 2 - left,
        ]);

        this.apply(
            tuiPx(Math.round(top)),
            tuiPx(Math.round(left)),
            Math.round((tuiClamp(beakTop, 0, clientHeight) / clientHeight) * 100),
            Math.round((tuiClamp(beakLeft, 0, clientWidth) / clientWidth) * 100),
        );
    }
}
