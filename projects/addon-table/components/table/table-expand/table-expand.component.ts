import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    PLATFORM_ID,
    signal,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiPresent} from '@taiga-ui/kit/directives/present';
import {map, of, Subject, switchMap, timer} from 'rxjs';

import {TUI_TABLE_OPTIONS} from '../table.options';

@Component({
    selector: 'tui-table-expand',
    templateUrl: './table-expand.template.html',
    styleUrl: './table-expand.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiPresent,
            outputs: ['tuiPresentChange'],
        },
    ],
    host: {
        ngSkipHydration: 'true',
        '(tuiPresentChange)': 'visible$.next($event)',
    },
})
export class TuiTableExpand {
    @ViewChild('content', {static: true})
    private readonly content?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly server = isPlatformServer(inject(PLATFORM_ID));

    protected readonly transitioning = signal(false);
    protected readonly contentHeight = computed((_ = this.expanded()) => this.update());
    protected readonly visible$ = new Subject<boolean>();
    protected readonly sub = this.visible$
        .pipe(
            switchMap((v) => (v ? timer(500).pipe(map(() => v)) : of(v))),
            takeUntilDestroyed(),
        )
        .subscribe((visible) => this.el.classList.toggle('_visible', visible));

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
