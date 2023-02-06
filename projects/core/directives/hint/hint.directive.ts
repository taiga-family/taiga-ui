import {
    Directive,
    ElementRef,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Renderer2,
    Self,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    tuiDefaultProp,
    TuiDestroyService,
    TuiHoveredService,
    TuiObscuredService,
    TuiParentsScrollService,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {DESCRIBED_BY} from '@taiga-ui/core/directives/described-by';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, of, Subject} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    map,
    startWith,
    switchMap,
    take,
    takeUntil,
} from 'rxjs/operators';

import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[tuiHint]:not(ng-container)',
    providers: [TuiObscuredService, TuiParentsScrollService, TuiDestroyService],
})
export class TuiHintDirective extends AbstractTuiHint implements OnDestroy {
    @Input()
    tuiHintId?: string;

    @Input()
    @tuiDefaultProp()
    tuiHintShowDelay: TuiHintOptions['tuiHintShowDelay'] = this.options.tuiHintShowDelay;

    @Input()
    @tuiDefaultProp()
    tuiHintHideDelay: TuiHintOptions['tuiHintHideDelay'] = this.options.tuiHintHideDelay;

    @Input()
    @tuiDefaultProp()
    tuiHintHost: HTMLElement | null = null;

    // TODO: 3.0 Remove null
    @Input()
    @tuiRequiredSetter()
    set tuiHint(value: PolymorpheusContent | null) {
        if (!value) {
            this.hideTooltip();
            this.content = '';

            return;
        }

        this.content = value;
    }

    readonly componentHovered$ = new Subject<boolean>();

    constructor(
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) hintService: TuiHintService,
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        @Inject(TuiObscuredService)
        @Self()
        obscured$: TuiObscuredService,
        @Inject(TuiHoveredService) hoveredService: TuiHoveredService,
        @Optional()
        @Inject(TuiActiveZoneDirective)
        activeZone: TuiActiveZoneDirective | null,
        @Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions,
    ) {
        super(elementRef, hintService, activeZone, options);

        // @bad TODO: Use private provider
        combineLatest(
            hoveredService.createHovered$(elementRef.nativeElement),
            this.componentHovered$.pipe(startWith(false)),
        )
            .pipe(
                map(
                    ([directiveHovered, componentHovered]) =>
                        directiveHovered || componentHovered,
                ),
                switchMap(visible => {
                    this.toggleClass(visible);

                    return of(visible).pipe(
                        delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay),
                    );
                }),
                switchMap(visible =>
                    visible && this.mode !== 'overflow'
                        ? obscured$.pipe(
                              map(obscured => !obscured),
                              take(2),
                          )
                        : of(visible),
                ),
                distinctUntilChanged(),
                takeUntil(destroy$),
            )
            .subscribe(visible => {
                if (visible) {
                    this.showTooltip();
                } else {
                    this.hideTooltip();
                }
            });

        this.hintService.register(this);
    }

    get id(): string | null {
        return this.tuiHintId ? this.tuiHintId + DESCRIBED_BY : null;
    }

    get host(): HTMLElement {
        return this.tuiHintHost ? this.tuiHintHost : this.elementRef.nativeElement;
    }

    getElementClientRect(): ClientRect {
        return this.host.getBoundingClientRect();
    }

    ngOnDestroy(): void {
        this.hintService.unregister(this);
    }

    protected showTooltip(): void {
        if (this.content === '') {
            return;
        }

        this.toggleClass(true);
        this.hintService.add(this);
    }

    protected hideTooltip(): void {
        this.toggleClass(false);
        this.hintService.remove(this);
    }

    private toggleClass(add: boolean): void {
        if (add) {
            this.renderer.addClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
        }
    }
}
