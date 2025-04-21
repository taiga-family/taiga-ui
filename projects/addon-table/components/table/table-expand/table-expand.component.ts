import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom/inject-element';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens/animations-speed';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous/to-animation-options';

import {TUI_TABLE_OPTIONS} from '../table.options';

@Component({
    standalone: true,
    selector: 'tui-table-expand',
    templateUrl: './table-expand.template.html',
    styleUrls: ['./table-expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        style: '--tui-duration: 0ms',
    },
})
export class TuiTableExpand {
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly animationSpeed = inject(TUI_ANIMATIONS_SPEED);

    protected readonly transitioning = signal(false);
    protected readonly contentHeight = computed((_ = this.expanded()) =>
        this.updateContentHeight(),
    );

    @ViewChild('content', {static: true})
    private readonly contentElRef?: ElementRef<HTMLElement>;

    @Output()
    public readonly expandedChange = new EventEmitter<boolean>();

    public readonly expanded = signal(this.options.open);

    constructor() {
        const el = tuiInjectElement();

        setTimeout(
            () => el.style.removeProperty('--tui-duration'),
            tuiGetDuration(this.animationSpeed),
        );
    }

    @Input('expanded')
    public set expandedSetter(open: boolean) {
        this.expanded.set(open);
        this.transitioning.set(true);
    }

    public toggle(): void {
        this.expanded.set(!this.expanded());
        this.transitioning.set(true);
        this.expandedChange.emit(this.expanded());
    }

    private updateContentHeight(): number {
        if (!this.contentElRef) {
            return 0;
        }

        const el = this.contentElRef.nativeElement;
        el.style.setProperty('display', 'block');

        const height = el.getBoundingClientRect().height;

        el.style.removeProperty('display');

        return height;
    }
}
