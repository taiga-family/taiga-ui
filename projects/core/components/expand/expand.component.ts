import {NgIfContext} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TUI_PARENT_ANIMATION, TuiValuesOf} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED} from '@taiga-ui/core/constants';

import {TuiExpandContentDirective} from './expand-content.directive';

const State = {
    Idle: 0,
    Loading: 1,
    Prepared: 2,
    Animated: 3,
} as const;

const LOADER_HEIGHT = 48;

@Component({
    selector: 'tui-expand',
    templateUrl: './expand.template.html',
    styleUrls: ['./expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiExpandComponent {
    @HostBinding('class._expanded')
    @HostBinding('attr.aria-expanded')
    private currentExpanded: boolean | null = null;

    @ViewChild('wrapper')
    private readonly contentWrapper?: ElementRef<HTMLDivElement>;

    private state: TuiValuesOf<typeof State> = State.Idle;

    @Input()
    async = false;

    /**
     * @deprecated use {@link expanded}
     */
    set expandedSetter(expanded: boolean | null) {
        this.expanded = expanded;
    }

    @Input()
    set expanded(expanded: boolean | null) {
        if (this.currentExpanded === null) {
            this.currentExpanded = expanded;

            return;
        }

        if (this.state !== State.Idle) {
            this.currentExpanded = expanded;
            this.state = State.Animated;

            return;
        }

        this.currentExpanded = expanded;
        this.retrigger(this.async && expanded ? State.Loading : State.Animated);
    }

    get expanded(): boolean | null {
        return this.currentExpanded;
    }

    @ContentChild(TuiExpandContentDirective, {read: TemplateRef})
    content: TemplateRef<NgIfContext<boolean>> | null = null;

    constructor(@Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef) {}

    @HostBinding('class._overflow')
    get overflow(): boolean {
        return this.state !== State.Idle;
    }

    @HostBinding('class._loading')
    get loading(): boolean {
        return !!this.currentExpanded && this.async && this.state === State.Loading;
    }

    @HostBinding('style.height.px')
    get height(): number | null {
        const {currentExpanded, state, contentWrapper} = this;

        if (
            (currentExpanded && state === State.Prepared) ||
            (!currentExpanded && state === State.Animated)
        ) {
            return 0;
        }

        if (
            contentWrapper &&
            ((!currentExpanded && state === State.Prepared) ||
                (currentExpanded && state === State.Animated))
        ) {
            return contentWrapper.nativeElement.offsetHeight;
        }

        if (contentWrapper && currentExpanded && state === State.Loading) {
            return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
        }

        return null;
    }

    get contentVisible(): boolean {
        return this.currentExpanded || this.state !== State.Idle;
    }

    @HostListener('transitionend.self', ['$event'])
    onTransitionEnd({propertyName}: TransitionEvent): void {
        if (propertyName === 'opacity' && this.state === State.Animated) {
            this.state = State.Idle;
        }
    }

    @HostListener(TUI_EXPAND_LOADED, ['$event'])
    onExpandLoaded(event: Event): void {
        event.stopPropagation();

        if (this.state === State.Loading) {
            this.retrigger(State.Animated);
        }
    }

    private retrigger(state: TuiValuesOf<typeof State>): void {
        this.state = State.Prepared;

        // We need delay to re-trigger CSS height transition from the correct number
        setTimeout(() => {
            if (this.state !== State.Prepared) {
                return;
            }

            this.state = state;
            this.cdr.markForCheck();
        });
    }
}
