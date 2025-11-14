import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    type ElementRef,
    inject,
    model,
    PLATFORM_ID,
    signal,
    viewChild,
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
    private readonly content = viewChild<ElementRef<HTMLElement>>('content');

    private readonly el = tuiInjectElement();
    private readonly server = isPlatformServer(inject(PLATFORM_ID));

    protected readonly transitioning = signal(false);
    protected readonly contentHeight = computed((_ = this.expanded()) =>
        this.update(this.content()),
    );

    protected readonly visible$ = new Subject<boolean>();
    protected readonly sub = this.visible$
        .pipe(
            switchMap((v) => (v ? timer(500).pipe(map(() => v)) : of(v))),
            takeUntilDestroyed(),
        )
        .subscribe((visible) => this.el.classList.toggle('_visible', visible));

    public readonly expanded = model(inject(TUI_TABLE_OPTIONS).open);
    protected readonly transitioningEffect = effect((_, __ = this.expanded()) =>
        this.transitioning.set(true),
    );

    public toggle(): void {
        this.expanded.set(!this.expanded());
    }

    private update(content: ElementRef<HTMLElement> | undefined): number {
        if (!content || this.server) {
            return 0;
        }

        const el = content.nativeElement;

        el.style.setProperty('display', 'block');

        const height = el.getBoundingClientRect().height;

        el.style.removeProperty('display');

        return height;
    }
}
