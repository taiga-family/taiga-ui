import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DestroyRef,
    inject,
    Input,
    type QueryList,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {TuiExpand} from '@taiga-ui/experimental/components/expand';
import {combineLatest, map, merge, ReplaySubject, withLatestFrom} from 'rxjs';

import {TuiAccordionDirective} from './accordion.directive';

@Component({
    standalone: true,
    selector: 'tui-accordion',
    template: '<ng-content />',
    styleUrls: ['./accordion.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiGroupOptionsProvider({
            orientation: 'vertical',
            collapsed: true,
        }),
    ],
    hostDirectives: [TuiGroup],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiAccordionComponent implements AfterViewInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly toggle$ = new ReplaySubject<TuiAccordionDirective>(Infinity);

    @ContentChildren(TuiExpand)
    public readonly expands: QueryList<TuiExpand> = EMPTY_QUERY;

    // Descendants search is required so a trigger wrapped in an arbitrary
    // element (e.g. alongside a custom action button) is still found — but
    // that also picks up triggers belonging to an accordion nested inside
    // this one's tui-expand, so `ownDirectives` filters those back out to
    // keep index-based pairing intact.
    @ContentChildren(TuiAccordionDirective, {descendants: true})
    public readonly directives: QueryList<TuiAccordionDirective> = EMPTY_QUERY;

    @Input()
    public closeOthers = true;

    public readonly size = signal<TuiSizeL | TuiSizeS>('l');

    @Input('size')
    public set sizeSetter(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

    public ngAfterViewInit(): void {
        merge(
            combineLatest([this.directives.changes, this.expands.changes]).pipe(
                withLatestFrom(this.toggle$),
                map(([, accordion]) => accordion),
            ),
            this.toggle$,
        )
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((accordion) => this.expand(accordion));
    }

    public toggle(directive: TuiAccordionDirective): void {
        this.toggle$.next(directive);
    }

    private get ownDirectives(): TuiAccordionDirective[] {
        return this.directives.filter((dir) => dir.accordion === this);
    }

    private expand(accordion: TuiAccordionDirective): void {
        const ownDirectives = this.ownDirectives;

        if (this.closeOthers && accordion.open()) {
            this.expands.forEach((expand) => {
                expand.expanded = false;
            });

            ownDirectives.forEach((dir) => {
                if (dir === accordion) {
                    return;
                }

                dir.open.set(false);
                dir.tuiAccordion = false;
                dir.tuiAccordionChange.emit(false);
            });
        }

        const expand = this.expands.get(ownDirectives.indexOf(accordion));

        if (expand) {
            expand.expanded = accordion.open();
        }
    }
}
