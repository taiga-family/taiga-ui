import type {Provider} from '@angular/core';
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
import {TuiRectAccessor} from '@taiga-ui/core/classes';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiAppearance, tuiAppearance} from '@taiga-ui/core/directives/appearance';
import type {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {
    TUI_HINT_COMPONENT,
    TUI_HINT_PROVIDERS,
    TuiHintHover,
    TuiHintPointer,
    TuiHintUnstyledComponent,
} from '@taiga-ui/core/directives/hint';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiIsObscured, tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {takeWhile} from 'rxjs';

const BEAK_EDGE_OFFSET = 24;

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
    providers: [TUI_HINT_PROVIDERS, tuiButtonOptionsProvider({size: 's'})],
    animations: [tuiFadeIn, tuiScaleIn],
    hostDirectives: [TuiAppearance],
    host: {
        '[@tuiScaleIn]': 'isMobile ? options : dummy',
        '[@tuiFadeIn]': 'options',
        '[class._untouchable]': 'pointer',
        '[class._mobile]': 'isMobile',
        '[attr.tuiTheme]': 'theme',
        '(document:click)': 'onClick($event.target)',
    },
})
export class TuiHintComponent<C = any> {
    private readonly el = tuiInjectElement();
    private readonly hover = inject(TuiHintHover);
    private readonly vvs = inject(TuiVisualViewportService);

    protected readonly dummy = {value: '', params: {end: 1, start: 1}};
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

    protected readonly theme = this.hint.el
        .closest('[tuiTheme]')
        ?.getAttribute('tuiTheme');

    protected readonly appearance = tuiAppearance(this.hint.appearance);

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
        const [beakTop, beakLeft] = this.vvs.correct([
            tuiClamp(
                accessorRect.top + accessorRect.height / 2 - hintRect.top,
                beakRotate ? BEAK_EDGE_OFFSET : 0,
                beakRotate ? hintRect.height - BEAK_EDGE_OFFSET : hintRect.height,
            ),
            tuiClamp(
                accessorRect.left + accessorRect.width / 2 - hintRect.left,
                beakRotate ? 0 : BEAK_EDGE_OFFSET,
                beakRotate ? hintRect.width : hintRect.width - BEAK_EDGE_OFFSET,
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

export function tuiProvideExperimentalHint(): Provider {
    return {
        provide: TUI_HINT_COMPONENT,
        useValue: TuiHintComponent,
    };
}
