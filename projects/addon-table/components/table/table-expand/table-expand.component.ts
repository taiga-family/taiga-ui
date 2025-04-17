import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    Output,
    signal,
    ViewEncapsulation,
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
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 't-table-expand',
        style: 'animation-iteration-count: 0',
    },
})
export class TuiTableExpand {
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly animationSpeed = inject(TUI_ANIMATIONS_SPEED);

    protected readonly transitioning = signal(false);
    protected readonly contentHeight = computed((_ = this.expanded()) =>
        this.updateContentHeight(),
    );

    @Output()
    public readonly expandedChange = new EventEmitter<boolean>();

    public readonly expanded = signal(this.options.open);

    constructor() {
        setTimeout(
            () => this.el.style.removeProperty('animation-iteration-count'),
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
        const contentEl = this.el.querySelector<HTMLDivElement>(
            '.t-table-expand__content',
        );

        if (contentEl) {
            contentEl.style.setProperty('display', 'block');

            const height = contentEl.getBoundingClientRect().height;

            contentEl.style.removeProperty('display');

            return height;
        }

        return 0;
    }
}
