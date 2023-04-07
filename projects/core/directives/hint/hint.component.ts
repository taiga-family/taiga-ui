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
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';
import {TuiPoint} from '@taiga-ui/core/types';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

// eslint-disable-next-line import/no-cycle
import {TuiHintDirective} from './hint.directive';
import {TuiHintHoverDirective} from './hint-hover.directive';
import {TuiHintPointerDirective} from './hint-pointer.directive';

@Component({
    selector: 'tui-hint',
    template: `
        <ng-container *polymorpheusOutlet="content as text; context: context">
            {{ text }}
        </ng-container>
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
})
export class TuiHintComponent<C = any> {
    @HostBinding('@tuiFadeIn')
    readonly animation = {value: '', ...this.options} as const;

    @HostBinding('attr.data-appearance')
    readonly appearance = this.polymorpheus.$implicit.appearance || this.mode?.mode;

    @HostBinding('class._untouchable')
    readonly untouchable = !!this.pointer;

    constructor(
        @Inject(TuiHoveredService) hovered$: Observable<boolean>,
        @Inject(TuiPositionService) position$: Observable<TuiPoint>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(TuiRectAccessor) protected readonly accessor: TuiRectAccessor,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly polymorpheus: TuiContextWithImplicit<TuiPortalItem<C>>,
        @Inject(TuiHintHoverDirective) private readonly hover: TuiHintHoverDirective,
        @Optional() @Inject(TuiHintPointerDirective) private readonly pointer: unknown,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly mode: TuiModeDirective | null,
        @Inject(TuiVisualViewportService)
        private readonly visualViewportService: TuiVisualViewportService,
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
        const safeLeft = Math.max(left, 4);
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
