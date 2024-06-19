import type {NgIfContext} from '@angular/common';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    DestroyRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiValuesOf} from '@taiga-ui/cdk/types';
import {tuiParentAnimation} from '@taiga-ui/core/animations';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {timer} from 'rxjs';

import {TuiExpandContentDirective} from './expand-content.directive';

const State = {
    Idle: 0,
    Loading: 1,
    Prepared: 2,
    Animated: 3,
} as const;

const LOADER_HEIGHT = 48;

/**
 * An event indicating that async data for expand has finished loading.
 * Dispatch to finish loading states for {@link TuiExpandComponent}.
 */
export const TUI_EXPAND_LOADED = 'tui-expand-loaded';

@Component({
    standalone: true,
    selector: 'tui-expand',
    imports: [TuiLoader, NgIf, NgTemplateOutlet],
    templateUrl: './expand.template.html',
    styleUrls: ['./expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation],
})
export class TuiExpandComponent {
    @ViewChild('wrapper')
    private readonly contentWrapper?: ElementRef<HTMLDivElement>;

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private state: TuiValuesOf<typeof State> = State.Idle;

    @ContentChild(TuiExpandContentDirective, {read: TemplateRef})
    protected content: TemplateRef<NgIfContext<boolean>> | null = null;

    @HostBinding('class._expanded')
    @HostBinding('attr.aria-expanded')
    protected expanded: boolean | null = null;

    @Input()
    public async = false;

    @Input('expanded')
    public set expandedSetter(expanded: boolean | null) {
        if (this.expanded === null) {
            this.expanded = expanded;

            return;
        }

        if (this.state !== State.Idle) {
            this.expanded = expanded;
            this.state = State.Animated;

            return;
        }

        this.expanded = expanded;
        this.retrigger(this.async && expanded ? State.Loading : State.Animated);
    }

    public get contentVisible(): boolean {
        return this.expanded || this.state !== State.Idle;
    }

    @HostBinding('class._overflow')
    protected get overflow(): boolean {
        return this.state !== State.Idle;
    }

    @HostBinding('class._loading')
    protected get loading(): boolean {
        return !!this.expanded && this.async && this.state === State.Loading;
    }

    @HostBinding('style.height.px')
    protected get height(): number | null {
        const {expanded, state, contentWrapper} = this;

        if (
            (expanded && state === State.Prepared) ||
            (!expanded && state === State.Animated)
        ) {
            return 0;
        }

        if (
            contentWrapper &&
            ((!expanded && state === State.Prepared) ||
                (expanded && state === State.Animated))
        ) {
            return contentWrapper.nativeElement.offsetHeight;
        }

        if (contentWrapper && expanded && state === State.Loading) {
            return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
        }

        return null;
    }

    @HostListener('transitionend.self', ['$event'])
    protected onTransitionEnd({propertyName, pseudoElement}: TransitionEvent): void {
        if (
            propertyName === 'opacity' &&
            !pseudoElement &&
            this.state === State.Animated
        ) {
            this.state = State.Idle;
        }
    }

    @HostListener(TUI_EXPAND_LOADED, ['$event'])
    protected onExpandLoaded(event: Event): void {
        event.stopPropagation();

        if (this.state === State.Loading) {
            this.retrigger(State.Animated);
        }
    }

    private retrigger(state: TuiValuesOf<typeof State>): void {
        this.state = State.Prepared;

        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                // We need delay to re-trigger CSS height transition from the correct number
                if (this.state !== State.Prepared) {
                    return;
                }

                this.state = state;
                this.cdr.markForCheck();
            });
    }
}
