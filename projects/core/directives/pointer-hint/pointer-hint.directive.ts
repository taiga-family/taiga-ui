import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {
    tuiDefaultProp,
    TuiDestroyService,
    TuiHoveredService,
    tuiRequiredSetter,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, of} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    filter,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

import {TUI_POINTER_HINT_OPTIONS, TuiPointerHintOptions} from './pointer-hint-options';

@Directive({
    selector: '[tuiPointerHint]:not(ng-container)',
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiPointerHintDirective extends AbstractTuiHint {
    private currentMouseRect = this.mousePositionToClientRect();

    @Input()
    @tuiDefaultProp()
    tuiHintShowDelay: TuiPointerHintOptions['tuiHintShowDelay'] =
        this.options.tuiHintShowDelay;

    @Input()
    @tuiDefaultProp()
    tuiHintHideDelay: TuiPointerHintOptions['tuiHintHideDelay'] =
        this.options.tuiHintHideDelay;

    // TODO: 3.0 Remove null
    @Input()
    @tuiRequiredSetter()
    set tuiPointerHint(value: PolymorpheusContent | null) {
        if (!value) {
            this.hideTooltip();
            this.content = '';

            return;
        }

        this.content = value;
    }

    content: PolymorpheusContent = '';

    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) hintService: TuiHintService,
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(TuiHoveredService) hoveredService: TuiHoveredService,
        @Inject(TUI_POINTER_HINT_OPTIONS)
        protected readonly options: TuiPointerHintOptions,
    ) {
        super(elementRef, hintService, null, options);

        const hint$ = hoveredService.pipe(
            filter(() => !!this.content),
            startWith(false),
            distinctUntilChanged(),
        );

        hint$
            .pipe(
                switchMap(visible =>
                    of(visible).pipe(
                        delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay),
                    ),
                ),
                takeUntil(destroy$),
            )
            .subscribe({
                next: visible => {
                    if (visible) {
                        this.showTooltip();
                    } else {
                        this.hideTooltip();
                    }
                },
                complete: () => {
                    this.hideTooltip();
                },
            });

        this.initMouseMoveSubscription();
    }

    getElementClientRect(): ClientRect {
        return this.currentMouseRect;
    }

    private initMouseMoveSubscription(): void {
        const mouseMove$: Observable<MouseEvent> = typedFromEvent(
            this.elementRef.nativeElement,
            'mousemove',
        );

        mouseMove$.pipe(takeUntil(this.destroy$)).subscribe(({clientX, clientY}) => {
            this.currentMouseRect = this.mousePositionToClientRect(clientX, clientY);
        });
    }

    private mousePositionToClientRect(x: number = 0, y: number = 0): ClientRect {
        return {
            left: x,
            right: x,
            top: y,
            bottom: y,
            width: 0,
            height: 0,
        };
    }
}
