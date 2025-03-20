/* eslint-disable rxjs/no-nested-subscribe */
import {NgTemplateOutlet} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_REDUCED_MOTION} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {fromEvent, race, take, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: '[tuiButtonGroup]',
    imports: [NgTemplateOutlet],
    template: `
        <ng-container
            *ngTemplateOutlet="template || null; context: {$implicit: activeIndex()}"
        />

        <ng-content />
    `,
    styleUrls: ['./button-group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiButtonGroup: '',
        '[class._fade]': 'fade()',
        '[style.height.px]': 'getSize()',
    },
    exportAs: 'tuiButtonGroup',
})
export class TuiButtonGroup {
    private readonly destroyRef = inject(DestroyRef);
    private readonly reducedMotion = inject(TUI_REDUCED_MOTION);
    private readonly cd = inject(ChangeDetectorRef);
    private readonly el = tuiInjectElement();
    private readonly animated = signal(true);
    private readonly intermediateIndex = signal(0);
    protected readonly activeIndex = signal(0);
    protected readonly fade = signal(false);

    @Input()
    public template?: TemplateRef<unknown>;

    @Input('tuiButtonGroup')
    public set index(value: number | '') {
        this.intermediateIndex.set(parseInt(value as string, 10) || 0);

        if (this.reducedMotion) {
            this.activeIndex.set(this.intermediateIndex());

            return;
        }

        if (this.activeIndex() === this.intermediateIndex() || !this.animated()) {
            return;
        }

        this.animated.set(false);
        this.fade.set(true);

        this.getTransitionEvent().subscribe(() => {
            // step 1: wait fade out buttons
            this.activeIndex.set(this.intermediateIndex());

            this.getTransitionEvent().subscribe(() => {
                // step 2: wait some transition on root elements
                this.fade.set(false);

                this.getTransitionEvent().subscribe(() => {
                    // step 3: wait fade in buttons
                    this.activeIndex.set(this.intermediateIndex());
                    this.animated.set(true);
                });
            });
        });
    }

    public get currentIndex(): number {
        return this.activeIndex();
    }

    protected getSize(): number {
        return (this.el.querySelectorAll('button') ?? []).length === 1 ? 64 : 104;
    }

    private getTransitionEvent(): Observable<unknown> {
        return race(fromEvent(this.el, 'transitionend'), timer(100)).pipe(
            take(1),
            tuiWatch(this.cd),
            takeUntilDestroyed(this.destroyRef),
        );
    }
}
