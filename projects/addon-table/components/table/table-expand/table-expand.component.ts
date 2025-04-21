import {
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

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
    @ViewChild('content', {static: true})
    private readonly content?: ElementRef<HTMLElement>;
    private readonly el = tuiInjectElement();

    protected readonly transitioning = signal(false);
    protected readonly contentHeight = computed((_ = this.expanded()) =>
        this.updateContentHeight(),
    );

    @Output()
    public readonly expandedChange = new EventEmitter<boolean>();

    public readonly expanded = signal(inject(TUI_TABLE_OPTIONS).open);

    constructor() {
        // Enabling transitions
        setTimeout(() => this.el.style.removeProperty('--tui-duration'), 500);
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
        if (!this.content) {
            return 0;
        }

        const el = this.content.nativeElement;

        el.style.setProperty('display', 'block');

        const height = el.getBoundingClientRect().height;

        el.style.removeProperty('display');

        return height;
    }
}
