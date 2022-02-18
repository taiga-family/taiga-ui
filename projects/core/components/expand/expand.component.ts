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
import {isCurrentTarget, tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED} from '@taiga-ui/core/constants';

import {TuiExpandContentDirective} from './expand-content.directive';

enum State {
    Idle,
    Loading,
    Prepared,
    Animated,
}

const LOADER_HEIGHT = 48;

@Component({
    selector: 'tui-expand',
    templateUrl: './expand.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./expand.style.less'],
})
export class TuiExpandComponent {
    @ViewChild('wrapper')
    private readonly contentWrapper?: ElementRef<HTMLDivElement>;

    private state = State.Idle;

    @Input()
    @tuiDefaultProp()
    async = false;

    @Input('expanded')
    @tuiRequiredSetter()
    set expandedSetter(expanded: boolean | null) {
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

    @ContentChild(TuiExpandContentDirective, {read: TemplateRef})
    content: TemplateRef<NgIfContext<boolean>> | null = null;

    @HostBinding('class._expanded')
    @HostBinding('attr.aria-expanded')
    expanded: boolean | null = null;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    @HostBinding('class._overflow')
    get overflow(): boolean {
        return this.state !== State.Idle;
    }

    @HostBinding('class._loading')
    get loading(): boolean {
        return !!this.expanded && this.async && this.state === State.Loading;
    }

    @HostBinding('style.height.px')
    get height(): number | null {
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

    get contentVisible(): boolean {
        return this.expanded || this.state !== State.Idle;
    }

    @HostListener('transitionend', ['$event'])
    onTransitionEnd(event: TransitionEvent) {
        if (
            isCurrentTarget(event) &&
            event.propertyName === 'opacity' &&
            this.state === State.Animated
        ) {
            this.state = State.Idle;
        }
    }

    @HostListener(TUI_EXPAND_LOADED, ['$event'])
    onExpandLoaded(event: Event) {
        event.stopPropagation();

        if (this.state === State.Loading) {
            this.retrigger(State.Animated);
        }
    }

    private retrigger(state: State) {
        this.state = State.Prepared;

        // We need delay to retrigger CSS height transition from the correct number
        setTimeout(() => {
            if (this.state !== State.Prepared) {
                return;
            }

            this.state = state;
            this.changeDetectorRef.markForCheck();
        });
    }
}
