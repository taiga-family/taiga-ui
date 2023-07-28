import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Optional,
    Self,
} from '@angular/core';
import {
    EMPTY_CLIENT_RECT,
    tuiClamp,
    TuiContextWithImplicit,
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
import {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATION_OPTIONS, TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {TuiPoint} from '@taiga-ui/core/types';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

// eslint-disable-next-line import/no-cycle
import {TuiHintDirective} from './hint.directive';
import {TuiHintHoverDirective} from './hint-hover.directive';
import {TuiHintPointerDirective} from './hint-pointer.directive';

const GAP = 4;

@Component({
    selector: 'tui-hint',
    template: `
        <span
            *polymorpheusOutlet="content as text; context: context"
            [innerHTML]="text"
        ></span>
    `,
    styleUrls: ['./hint.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiPositionService,
        TuiHoveredService,
        tuiPositionAccessorFor('hint'),
        tuiRectAccessorFor('hint', TuiHintDirective),
    ],
    animations: [tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[class._untouchable]': 'pointer',
    },
})
export class TuiHintComponent<C = any> {
    @HostBinding('attr.data-appearance')
    readonly appearance = this.polymorpheus.$implicit.appearance || this.mode?.mode;

    constructor(
        @Inject(TuiHoveredService) hovered$: Observable<boolean>,
        @Inject(TuiPositionService) position$: Observable<TuiPoint>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
        @Optional() @Inject(TuiHintPointerDirective) readonly pointer: unknown,
        @Inject(TuiRectAccessor) protected readonly accessor: TuiRectAccessor,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly polymorpheus: TuiContextWithImplicit<TuiPortalItem<C>>,
        @Inject(TuiHintHoverDirective) private readonly hover: TuiHintHoverDirective,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly mode: TuiModeDirective | null,
        @Inject(TuiVisualViewportService)
        private readonly visualViewportService: TuiVisualViewportService,
        @Inject(TUI_VIEWPORT) private readonly viewport: TuiRectAccessor,
    ) {
        position$
            .pipe(
                map(point => this.visualViewportService.correct(point)),
                takeUntil(destroy$),
            )
            .subscribe(([top, left]) => {
                this.update(top, left);
            });

        hovered$.pipe(takeUntil(destroy$)).subscribe(hover => this.hover.toggle(hover));
    }

    get content(): PolymorpheusContent<C> {
        return this.polymorpheus.$implicit.content;
    }

    get context(): C | undefined {
        return this.polymorpheus.$implicit.context;
    }

    @HostListener('document:click', ['$event.target'])
    onClick(target: HTMLElement): void {
        if (
            !this.el.nativeElement.contains(target) &&
            !this.hover.el.nativeElement.contains(target)
        ) {
            this.hover.toggle(false);
        }
    }

    @tuiPure
    private update(top: number, left: number): void {
        const {height, width} = this.el.nativeElement.getBoundingClientRect();
        const {style} = this.el.nativeElement;
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

        style.top = tuiPx(top);
        style.left = tuiPx(safeLeft);
        style.setProperty('--top', tuiPx(tuiClamp(beakTop, 0.5, height - 1)));
        style.setProperty('--left', tuiPx(tuiClamp(beakLeft, 0.5, width - 1)));
    }
}
