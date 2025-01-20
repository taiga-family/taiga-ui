import type {AfterViewInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DestroyRef,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {TuiExpand} from '@taiga-ui/experimental/components/expand';
import {ReplaySubject} from 'rxjs';

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

    @ContentChildren(TuiAccordionDirective)
    public readonly directives: QueryList<TuiAccordionDirective> = EMPTY_QUERY;

    @Input()
    public closeOthers = true;

    public readonly size = signal<TuiSizeL | TuiSizeS>('l');

    @Input('size')
    public set sizeSetter(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

    public ngAfterViewInit(): void {
        this.toggle$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((d) => {
            if (this.closeOthers && d.open()) {
                this.expands.forEach((expand) => {
                    expand.expanded = false;
                });

                this.directives.forEach((dir) => {
                    if (dir === d) {
                        return;
                    }

                    dir.open.set(false);
                    dir.tuiAccordion = false;
                    dir.tuiAccordionChange.emit(false);
                });
            }

            this.expands.get(this.directives.toArray().indexOf(d))!.expanded = d.open();
        });
    }

    public toggle(directive: TuiAccordionDirective): void {
        this.toggle$.next(directive);
    }
}
