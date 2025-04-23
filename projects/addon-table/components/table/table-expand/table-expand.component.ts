import {isPlatformServer} from '@angular/common';
import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    Output,
    PLATFORM_ID,
    signal,
    ViewChild,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiPresent} from '@taiga-ui/kit/directives/present';

import {TUI_TABLE_OPTIONS} from '../table.options';

@Component({
    standalone: true,
    selector: 'tui-table-expand',
    templateUrl: './table-expand.template.html',
    styleUrls: ['./table-expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiPresent,
            outputs: ['tuiPresentChange'],
        },
    ],
    host: {
        style: '--tui-duration: 0ms',
        '(tuiPresentChange)': 'onDOM($event)',
    },
})
export class TuiTableExpand {
    @ViewChild('content', {static: true})
    private readonly content?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly server = isPlatformServer(inject(PLATFORM_ID));
    private enableTransitionTimer: any;

    protected readonly transitioning = signal(false);
    protected readonly contentHeight = computed((_ = this.expanded()) => this.update());

    @Output()
    public readonly expandedChange = new EventEmitter<boolean>();

    public readonly expanded = signal(inject(TUI_TABLE_OPTIONS).open);

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

    protected onDOM(visible: boolean): void {
        if (this.enableTransitionTimer) {
            clearTimeout(this.enableTransitionTimer);
        }

        if (visible) {
            // Enabling transitions
            this.enableTransitionTimer = setTimeout(
                () => this.el.style.removeProperty('--tui-duration'),
                500,
            );
        } else {
            this.el.style.setProperty('--tui-duration', '0ms');
        }
    }

    private update(): number {
        if (!this.content || this.server) {
            return 0;
        }

        const el = this.content.nativeElement;

        el.style.setProperty('display', 'block');

        const height = el.getBoundingClientRect().height;

        el.style.removeProperty('display');

        return height;
    }
}
